# Networking Concepts for Penetration Testing

## Subnet Mask
A **subnet mask** is used to divide an IP address into network and host portions, enabling the creation of subnetworks.

### Key Points:
- **Format**: Typically expressed in dot-decimal notation (e.g., 255.255.255.0).
- **Function**: Determines which part of the IP address refers to the network and which part refers to the host.

---

## CIDR (Classless Inter-Domain Routing)
**CIDR** is a method for allocating IP addresses and routing IP packets.

### Key Points:
- **Notation**: Represented as IP address followed by a slash and a number (e.g., 192.168.1.0/24).
- **Benefits**:
  - Efficient IP address allocation.
  - Reduces routing table size.

---

## Default Gateway
The **default gateway** is the node that routes traffic from a local network to external networks.

### Key Points:
- **Function**: Acts as an intermediary between a local network and other networks, typically the internet.
- **Configuration**: Must be correctly set in the network settings for outbound traffic.

---

## DHCP, IP, Subnet Mask, Default Gateway, DNS
These are critical components of network configuration.

### Key Points:
- **DHCP (Dynamic Host Configuration Protocol)**:
  - Automatically assigns IP addresses, subnet masks, and other network configurations to devices.
- **IP Address**:
  - Unique identifier for devices on a network.
- **Subnet Mask**:
  - Defines the network segment of an IP address.
- **Default Gateway**:
  - Routes traffic to other networks.
- **DNS (Domain Name System)**:
  - Resolves domain names to IP addresses.

---

## Routing
Routing refers to the process of selecting paths for traffic in a network.

### Key Concepts:
- **TTL (Time To Live)**:
  - Limits the lifespan of data in a network, preventing it from circulating indefinitely.
- **Routing Table**:
  - Contains information about the paths to various network destinations.
- **Routing Protocols**:
  - Determine how routers communicate and share information about networks.
  - Common protocols include RIP, OSPF, and BGP.
- **NAT (Network Address Translation)**:
  - Translates private IP addresses to a public IP address for internet access.
- **ICMP Protocol (Internet Control Message Protocol)**:
  - Used for diagnostic and error messages (e.g., ping).

---

## How Trace Route Works
**Trace Route** is a network diagnostic tool that tracks the path packets take from a source to a destination.

### Key Points:
- **Functionality**:
  - Sends packets with increasing TTL values to discover each hop along the route.
- **Output**:
  - Displays the IP addresses of each router the packet passes through and the round-trip time.

---

## Transport Level
The transport level is responsible for providing communication services directly to the application processes.

### Key Concepts:
- **Ports**:
  - Numeric identifiers for specific processes or services (e.g., HTTP uses port 80).
- **TCP Protocol (Transmission Control Protocol)**:
  - Connection-oriented protocol ensuring reliable data transmission.
  - Provides flow control, error correction, and data integrity.
- **UDP Protocol (User Datagram Protocol)**:
  - Connectionless protocol allowing for faster, but less reliable, transmission of data.
  - Commonly used for streaming services where speed is crucial.

---

