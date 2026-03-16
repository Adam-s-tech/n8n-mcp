window.BENCHMARK_DATA = {
  "lastUpdate": 1773646072940,
  "repoUrl": "https://github.com/Adam-s-tech/n8n-mcp",
  "entries": {
    "n8n-mcp Benchmarks": [
      {
        "commit": {
          "author": {
            "email": "56956555+czlonkowski@users.noreply.github.com",
            "name": "Romuald Członkowski",
            "username": "czlonkowski"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f7a1cfe8bfe12530e012e43ca4a9de8dc943ca23",
          "message": "fix: field normalization, AI connection validation, autofix filter (#581) (#638)\n\n- Normalize name→nodeName and id→nodeId for node-targeting operations in\n  the Zod schema transform, so LLMs using natural field names no longer\n  get \"Node not found\" errors\n- Replace hardcoded ALL_CONNECTION_TYPES with dynamic iteration so AI\n  sub-nodes (ai_outputParser, ai_document, ai_textSplitter, etc.) are\n  not flagged as disconnected during save\n- Add .catchall() to workflowConnectionSchema and extend connection\n  reference validation to cover all connection types, not just main\n- Fix filterOperationsByFixes ID-vs-name mismatch: typeversion-upgrade\n  operations now include nodeName alongside nodeId, and the filter checks\n  both fields\n\nConceived by Romuald Członkowski - https://www.aiadvisors.pl/en\n\nCo-authored-by: Claude Opus 4.6 (1M context) <noreply@anthropic.com>",
          "timestamp": "2026-03-15T14:32:14+01:00",
          "tree_id": "3e8170b820822d4dc4ea7be6f3fbc5c3c099c25d",
          "url": "https://github.com/Adam-s-tech/n8n-mcp/commit/f7a1cfe8bfe12530e012e43ca4a9de8dc943ca23"
        },
        "date": 1773646072039,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "sample - array sorting - small",
            "value": 0.0136,
            "range": "0.3096",
            "unit": "ms",
            "extra": "73341 ops/sec"
          }
        ]
      }
    ]
  }
}