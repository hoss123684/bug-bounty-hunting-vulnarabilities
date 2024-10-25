# Certificate Chain

## What is a Certificate Chain?
- A **certificate chain** is a sequence of certificates, starting from a trusted root certificate authority (CA) down to the server’s certificate.
- This chain establishes trust by linking the server certificate to the root CA through intermediate certificates.

## Why Does the Certificate Chain Exist?
- The certificate chain enables **trust** without the client needing direct knowledge of the server’s certificate.
- Intermediate certificates allow **delegation of trust** from the root CA, providing layers of security and reducing the risk associated with exposing the root certificate.
- This hierarchy ensures that servers certified by the CA’s chain can be trusted across multiple clients without each one needing individual verification.

# How HTTPS Works

## HTTPS Overview
- **HTTPS** (Hypertext Transfer Protocol Secure) is an encrypted communication protocol that secures data transmission between a client and server using SSL/TLS.
- HTTPS ensures **confidentiality**, **integrity**, and **authenticity** by encrypting HTTP data.

## Steps in HTTPS Communication
1. **Client Hello**: The client initiates a connection, sharing supported SSL/TLS versions and encryption options.
2. **Server Hello**: The server responds with compatible settings and its SSL/TLS certificate.
3. **Certificate Verification**: The client verifies the server’s certificate against the certificate chain.
4. **Session Key Generation**: The client and server establish symmetric session keys for encryption.
5. **Encrypted Communication**: Data is securely transmitted using these session keys.

# OSI Network Model Layers

## What’s the OSI Network Model?
- The **OSI model** (Open Systems Interconnection) standardizes network functions across seven layers, from physical transmission to application-level services.

## Layer Breakdown
- **Layer 1: Physical** – Transmits raw data through physical mediums like cables.
- **Layer 2: Data Link** – Handles error detection and frame synchronization.
- **Layer 3: Network** – Manages routing and IP addressing (e.g., IP protocol).
- **Layer 4: Transport** – Provides reliable data transfer using protocols like TCP and UDP.
- **Layer 5: Session** – Manages session controls and dialog between applications.
- **Layer 6: Presentation** – Handles data translation, encryption, and compression.
- **Layer 7: Application** – Interfaces with end-user applications (e.g., HTTP, FTP).

# What Happens When I Open google.com?

1. **DNS Resolution**: Translates “google.com” into an IP address via DNS servers.
2. **TCP Connection**: Initiates a TCP connection through a three-way handshake (SYN, SYN-ACK, ACK).
3. **TLS Handshake** (if HTTPS): Establishes a secure communication channel with SSL/TLS.
4. **HTTP Request**: The browser sends an HTTP GET request for the page.
5. **Server Response**: Google’s server responds with HTML, JavaScript, and other resources.
6. **Rendering**: The browser renders the page.
7. **Further Requests**: Additional assets (images, stylesheets) are requested and rendered.

# TCP vs. UDP

## What’s TCP?
- **TCP** (Transmission Control Protocol) is a **connection-oriented** protocol ensuring reliable, ordered data delivery.
  
### Key TCP Features
  - **Reliability**: Lost packets are retransmitted.
  - **Error Checking**: Ensures data accuracy.
  - **Flow Control**: Manages data transmission speed.
## What’s UDP?
UDP (User Datagram Protocol) is a connectionless protocol, prioritizing speed over reliability for real-time applications.
### Key UDP Features
- No Reliability: Packets can be lost or arrive out of order.
- Low Latency: Faster than TCP; ideal for real-time applications.
- No Congestion Control: Optimized for speed, not accuracy.
