# How the Internet Started

## Background
- The Internet originated as **ARPANET** in the late 1960s, a project by the U.S. Department of Defense.
- Initially designed to ensure resilient communication in emergencies, ARPANET connected academic and research institutions.
- **Evolution**: The network evolved to connect global networks using TCP/IP, eventually forming the foundation of the modern Internet.

## Key Concepts
- **Decentralized Network**: Facilitates open, resilient connections across the globe.
- **Standardized Protocols**: Protocols like TCP/IP allow different devices to communicate reliably.

---

# Domain Name System (DNS)

## Purpose
- DNS translates human-readable domain names (e.g., `example.com`) to IP addresses for device communication.

## Structure
- **Hierarchical System**: Includes root servers, Top-Level Domains (TLDs), and individual domain names.
  
## Key Vulnerabilities
- **DNS Spoofing**: Manipulating DNS responses to redirect traffic.
- **Cache Poisoning**: Introducing false data into DNS caches to mislead users.

---

# Collecting Domains Using NsLookup

## NsLookup Overview
- `NsLookup` is a command-line tool for querying DNS records and obtaining domain information.

## Usage
- Execute `nslookup <domain>` to retrieve the IP address of a specified domain.
  
## Common Applications
- Collect subdomains, verify DNS records (A, MX, PTR), and detect DNS misconfigurations.

---

# HTTPS (Hypertext Transfer Protocol Secure)

## Definition
- HTTPS is the secure version of HTTP, encrypting data between the client and server with TLS/SSL.

## Purpose
- **Confidentiality and Integrity**: Protects data from eavesdropping and tampering.
  
## Indicators
- URLs start with `https://`, and browsers often display a padlock icon.

---

# URL (Uniform Resource Locator)

## Structure
- **Components**: `scheme://host:port/path?query#fragment`
  - `scheme`: Protocol (e.g., HTTP, HTTPS)
  - `host`: Domain or IP address
  - `port`: Optional, default is 80 for HTTP and 443 for HTTPS
  - `path`, `query`, `fragment`: Specify the location, parameters, and internal links within a resource

## Usage in Pentesting
- Query strings in URLs may be vulnerable to injection attacks, making them valuable for testing.

---

# HTTPS Request

## Components
- **Request Line**: Contains the HTTP method (e.g., GET), URL, and HTTP version.
- **Headers**: Key-value metadata pairs (e.g., `User-Agent`, `Host`).
- **Body**: Optional, typically used with POST requests to submit data.

## Pentesting Focus
- Headers and query parameters may reveal sensitive information or allow for injections.

---

# HTTPS Response

## Components
- **Status Line**: Contains HTTP version and response status code (e.g., 200 OK).
- **Headers**: Provide metadata about the response (e.g., `Content-Type`, `Set-Cookie`).
- **Body**: HTML, JSON, or other data sent from the server.

## Pentesting Relevance
- Status codes and headers can reveal server software, available resources, or misconfigurations.

---

# HTTP Methods

## Common Methods
- **GET**: Requests data from the server without a request body.
- **POST**: Submits data to the server with a request body.
- **PUT**: Updates or creates a resource.
- **DELETE**: Removes a resource.
- **HEAD**: Similar to GET but retrieves headers only.
- **OPTIONS**: Displays HTTP methods supported by the server.
- **PATCH**: Partially updates a resource.

## Security Implications
- Exposing methods like PUT or DELETE can introduce vulnerabilities if not properly restricted.

---

# HTTP Response Codes

## Categories
- **2xx Success**: Request succeeded (e.g., 200 OK, 204 No Content).
- **3xx Redirection**: Further action required (e.g., 301 Moved Permanently, 302 Found).
- **4xx Client Errors**: Client-side issues (e.g., 400 Bad Request, 403 Forbidden, 404 Not Found).
- **5xx Server Errors**: Server-side issues (e.g., 500 Internal Server Error, 502 Bad Gateway).

## Relevance in Pentesting
- Codes like 403 and 404 may reveal restricted areas, while 500-series errors can indicate underlying vulnerabilities.
