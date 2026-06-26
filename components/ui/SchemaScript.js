// Server Component — renders JSON-LD into <head> safely via Next.js.
// Usage: <SchemaScript schema={mySchemaObject} />
//        <SchemaScript schema={[schema1, schema2]} />  ← multiple schemas

export default function SchemaScript({ schema }) {
  const schemas = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemas.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          // suppressHydrationWarning prevents React hydration mismatch warnings
          // on JSON strings with special characters
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
