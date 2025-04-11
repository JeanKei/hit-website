// import React, { useEffect, useState } from "react";
// import neo4j from "neo4j-driver";
// import Menu from "@/components/menu/Menu";

// // Определяем типы для данных узлов и связей
// type NodeData = {
//   id: number;
//   label: string;
//   caption: string;
//   category: string;
// };

// type LinkData = {
//   source: number;
//   target: number;
//   relationType: string;
// };

// const queryActivAll =
//   "MATCH (n)-[r]->(m) RETURN { id: id(n), label: head(labels(n)), caption: n.name, category: n.category } as source, { id: id(m), label: head(labels(m)), caption: m.name, category: m.category } as target, type(r) as relationType LIMIT $limit";

// const defaultQuery: string = queryActivAll;

// const Graph: React.FC = () => {
//   // Типизируем состояние
//   const [currentLimit, setCurrentLimit] = useState<number>(100);
//   const [currentQuery, setCurrentQuery] = useState<string>(defaultQuery);

//   useEffect(() => {
//     const loadGraph = async () => {
//       const neo4jDriverScript = document.createElement("script");
//       neo4jDriverScript.src = "https://unpkg.com/neo4j-driver";
//       document.head.appendChild(neo4jDriverScript);

//       const forceGraphScript = document.createElement("script");
//       forceGraphScript.src = "//unpkg.com/3d-force-graph";
//       document.head.appendChild(forceGraphScript);

//       await Promise.all([
//         new Promise((resolve) =>
//           neo4jDriverScript.addEventListener("load", resolve)
//         ),
//         new Promise((resolve) =>
//           forceGraphScript.addEventListener("load", resolve)
//         ),
//       ]);

//       const neo4jDriver = neo4j.driver(
//         "bolt://localhost:7687",
//         neo4j.auth.basic("neo4j", "11111111"),
//         { encrypted: false }
//       );

//       const session = neo4jDriver.session({ database: "neo4j" });

//       try {
//         const start = new Date();
//         const result = await session.run(currentQuery, {
//           limit: neo4j.int(currentLimit),
//         });

//         const nodes: Record<number, NodeData> = {};
//         const links: LinkData[] = result.records.map((r) => {
//           const source: NodeData = r.get("source");
//           source.id = (source.id as any).toNumber();
//           nodes[source.id] = source;

//           const target: NodeData = r.get("target");
//           target.id = (target.id as any).toNumber();
//           nodes[target.id] = target;

//           const relationType: string = r.get("relationType");

//           return {
//             source: source.id,
//             target: target.id,
//             relationType,
//           };
//         });

//         function getCategoryColor(category: string): number {
//           switch (category) {
//             case "Disease":
//               return 0xff0000;
//             case "Gene":
//               return 0x800080;
//             case "Anatomy":
//               return 0x008000;
//             case "Compound":
//               return 0xffff00;
//             case "biological_process":
//               return 0x0000ff;
//             case "cellular_component":
//               return 0xffb6c1;
//             default:
//               return 0x808080;
//           }
//         }

//         session.close();

//         console.log(
//           `${links.length} links loaded in ${
//             new Date().getTime() - start.getTime()
//           } ms.`
//         );

//         const gData = { nodes: Object.values(nodes), links };
//         const elem = document.getElementById("3d-graph");

//         if (elem && (window as any).ForceGraph3D) {
//           const Graph = (window as any).ForceGraph3D;
//           Graph()(elem)
//             .backgroundColor("#f8fafc")
//             .graphData(gData)
//             .nodeAutoColorBy("community")
//             .nodeVal("size")
//             .nodeColor((node: NodeData) => getCategoryColor(node.category))
//             .linkWidth(1)
//             .linkColor(() => 0x000000)
//             .linkDirectionalParticles("weight")
//             .linkDirectionalParticleSpeed("weight")
//             .nodeLabel((node: NodeData) => `${node.label}: ${node.caption}`)
//             .linkLabel((link: LinkData) => link.relationType)
//             .onNodeHover((node: NodeData | null) => {
//               elem.style.cursor = node ? "pointer" : "default";
//             });
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     loadGraph();
//   }, [currentLimit, currentQuery]);

//   const updateLimit = (newLimit: number) => {
//     setCurrentLimit(newLimit);
//   };

//   const updateQuery = (newQuery: string) => {
//     setCurrentQuery(newQuery);
//   };

//   return (
//     <div>
//       <Menu updateLimit={updateLimit} updateQuery={updateQuery} />
//       <div id="3d-graph"></div>
//     </div>
//   );
// };

// export default Graph;

import React, { useEffect, useState } from "react";
import neo4j from "neo4j-driver";
import ForceGraph3D from "3d-force-graph";
import Menu from "@/components/menu/Menu";

type NodeData = {
  id: number;
  label: string;
  caption: string;
  category: string;
};

type LinkData = {
  source: number;
  target: number;
  relationType: string;
};

const queryActivAll =
  "MATCH (n)-[r]->(m) RETURN { id: id(n), label: head(labels(n)), caption: n.name, category: n.category } as source, { id: id(m), label: head(labels(m)), caption: m.name, category: m.category } as target, type(r) as relationType LIMIT $limit";

const defaultQuery: string = queryActivAll;

const Graph: React.FC = () => {
  const [currentLimit, setCurrentLimit] = useState<number>(100);
  const [currentQuery, setCurrentQuery] = useState<string>(defaultQuery);

  useEffect(() => {
    const loadGraph = async () => {
      const neo4jDriver = neo4j.driver(
        "bolt://localhost:7687",
        neo4j.auth.basic("neo4j", "11111111"),
        { encrypted: false }
      );

      const session = neo4jDriver.session({ database: "neo4j" });

      try {
        const start = new Date();
        const result = await session.run(currentQuery, {
          limit: neo4j.int(currentLimit),
        });

        const nodes: Record<number, NodeData> = {};
        const links: LinkData[] = result.records.map((r) => {
          const source: NodeData = r.get("source");
          source.id = (source.id as any).toNumber();
          nodes[source.id] = source;

          const target: NodeData = r.get("target");
          target.id = (target.id as any).toNumber();
          nodes[target.id] = target;

          const relationType: string = r.get("relationType");

          return {
            source: source.id,
            target: target.id,
            relationType,
          };
        });

        function getCategoryColor(category: string): number {
          switch (category) {
            case "Disease":
              return 0xff0000;
            case "Gene":
              return 0x800080;
            case "Anatomy":
              return 0x008000;
            case "Compound":
              return 0xffff00;
            case "biological_process":
              return 0x0000ff;
            case "cellular_component":
              return 0xffb6c1;
            default:
              return 0x808080;
          }
        }

        session.close();

        console.log(
          `${links.length} links loaded in ${
            new Date().getTime() - start.getTime()
          } ms.`
        );

        const gData = { nodes: Object.values(nodes), links };
        const elem = document.getElementById("3d-graph");

        if (elem) {
          const graph = (ForceGraph3D as any)();
          graph(elem)
            .backgroundColor("#f8fafc")
            .graphData(gData)
            .nodeAutoColorBy("community")
            .nodeVal("size")
            .nodeColor((node: NodeData) => getCategoryColor(node.category))
            .linkWidth(1)
            .linkColor(() => 0x000000)
            .linkDirectionalParticles("weight")
            .linkDirectionalParticleSpeed("weight")
            .nodeLabel((node: NodeData) => `${node.label}: ${node.caption}`)
            .linkLabel((link: LinkData) => link.relationType)
            .onNodeHover((node: NodeData | null) => {
              elem.style.cursor = node ? "pointer" : "default";
            });
        }
      } catch (error) {
        console.error(error);
      }
    };

    loadGraph();
  }, [currentLimit, currentQuery]);

  const updateLimit = (newLimit: number) => {
    setCurrentLimit(newLimit);
  };

  const updateQuery = (newQuery: string) => {
    setCurrentQuery(newQuery);
  };

  return (
    <div>
      <Menu updateLimit={updateLimit} updateQuery={updateQuery} />
      <div id="3d-graph"></div>
    </div>
  );
};

export default Graph;
