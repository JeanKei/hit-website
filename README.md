## Setup Instructions

### 1. Setup Neo4j Database

- Download and install Neo4j: https://neo4j.com/download/
- Upload dump
  - add dump file `db-full.dump`
  - create new DBMS from a dump (version: 5.11.0)
  - name/pass: `hit`/`11111111`
- Start the Neo4j Database

### 2. Install Dependencies

Before starting, install the project dependencies:

```bash
npm install

# or
yarn

# or
pnpm install

# or
bun install
```

### 3. Configure Neo4j Credentials

In your Next.js project, open the file:

`app/[locale]/3d-visualization/Graph.tsx`

Find this line:

```ts
const neo4jDriver = neo4j.driver(
  "bolt://localhost:7687",
  neo4j.auth.basic("neo4j", "11111111"),
  { encrypted: false }
);
```

Replace "11111111" with your actual Neo4j password.

### 4. Start the Website

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev

```

Then open your browser and go to: http://localhost:3000
