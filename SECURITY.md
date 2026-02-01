# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 3.0.x   | :white_check_mark: |
| < 3.0   | :x:                |

## Reporting a Vulnerability

If you discover a security vulnerability in DevTunnel, please report it by:

1. **DO NOT** open a public issue
2. Email: [Create a private security advisory](https://github.com/maiz-an/DevTunnel-CLI/security/advisories/new)
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

We will respond within 48 hours and work to fix the issue promptly.

## Security Highlights

DevTunnel-CLI is open source and designed to make local development sharing simple and transparent. Key highlights:

- Downloads Cloudflare binary from official releases over HTTPS
- Tunnels connect to localhost endpoints only
- No built-in telemetry — repository is auditable
- Runtime artifacts are kept in the project folder by default

## Safe Usage Guidance

- Share session URLs only with collaborators who need access
- Stop tunnels when a session ends (Ctrl+C)
- Consider adding authentication to your application if you need gated access
- Use local network controls (firewall) when exposing sensitive development services

### Binary Handling

- Source: official GitHub releases
- Transport: HTTPS
- Verification: basic file checks and execution test are performed

## Best Practices

1. **Keep Updated:** Use the latest DevTunnel release
2. **Secure Your Server:** Ensure the local service you expose is configured securely
3. **Consider App-level Auth:** Add authentication at the app level when needed
4. **Monitor Sessions:** Be mindful of who has session URLs during collaboration
5. **Close Tunnels:** End tunnels when not actively using them

## Questions?

For security questions, open a discussion at:
<https://github.com/maiz-an/DevTunnel-CLI/discussions>
