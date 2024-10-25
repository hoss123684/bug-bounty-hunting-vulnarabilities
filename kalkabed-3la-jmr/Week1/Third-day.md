# Networking Fundamentals for Penetration Testing

## What is a Network?
A **network** is a collection of computers, servers, mainframes, network devices, and other devices connected to one another for sharing data and resources. 

### Key Points:
- **Purpose**: Facilitate communication and resource sharing.
- **Types**:
  - **Local Area Network (LAN)**: Limited to a small geographical area.
  - **Wide Area Network (WAN)**: Covers a broad area, connecting multiple LANs.

---

## What’s the OSI Model?
The **OSI (Open Systems Interconnection) model** is a conceptual framework used to understand network interactions in seven layers.

### OSI Layers:
1. **Physical Layer**
2. **Data Link Layer**
3. **Network Layer**
4. **Transport Layer**
5. **Session Layer**
6. **Presentation Layer**
7. **Application Layer**

### Importance for Penetration Testing:
- Helps identify where vulnerabilities may exist in a network setup.
- Provides a systematic approach to troubleshooting.

---

## How Systems Communicate Through These Layers
Each layer of the OSI model serves a specific function and communicates with the layers directly above and below it.

### Communication Process:
- **Encapsulation**: Data is wrapped in protocol information at each layer.
- **Decapsulation**: Data is stripped of its protocol information as it moves up the layers on the receiving side.

---

## Physical Layer
The **Physical Layer** deals with the physical connection between devices.

### Key Points:
- **Mediums**: Includes cables (e.g., Ethernet, fiber optic) and wireless technologies.
- **Responsibilities**: Transmits raw binary data over the network.

---

## Network Topologies
**Network Topologies** refer to the layout of different elements (links, nodes, etc.) in a computer network.

### Common Types:
- **Bus Topology**: Single central cable with terminators at both ends.
- **Star Topology**: All nodes connect to a central hub.
- **Ring Topology**: Each node connects to two other nodes, forming a ring.
- **Mesh Topology**: Every device is interconnected.

---

## Data Link Layer
The **Data Link Layer** provides node-to-node data transfer and handles error correction from the physical layer.

### Key Points:
- **Frames**: Data packets at this layer are called frames.
- **Protocols**: Includes Ethernet, Wi-Fi, and Point-to-Point Protocol (PPP).

---

## ARP Protocol
**ARP (Address Resolution Protocol)** is used to map IP addresses to MAC addresses.

### Key Points:
- **Function**: Helps identify the hardware address of a device within a local network.
- **Requests**: Broadcasts a request to find the MAC address corresponding to an IP address.

---

## ARP Cache
The **ARP Cache** stores mappings of IP addresses to MAC addresses to improve efficiency.

### Key Points:
- **Temporary Storage**: Entries may expire after a timeout period.
- **Security Consideration**: ARP spoofing can occur if cache entries are manipulated.

---

## Network Layer
The **Network Layer** is responsible for data transfer between different networks and routing.

### Key Points:
- **Routing**: Determines the best path for data packets.
- **Protocols**: Includes Internet Protocol (IP), ICMP, and IGMP.

---

## Network of Networks
The concept of a **Network of Networks** refers to the interconnected structure of multiple networks, such as the Internet.

### Key Points:
- **Scalability**: Allows diverse networks to connect and communicate.
- **Protocols**: Governed primarily by the TCP/IP protocol suite.

---

## IPv4
**IPv4 (Internet Protocol version 4)** is the fourth version of the Internet Protocol, widely used for identifying devices on a network.

### Key Points:
- **Address Format**: Consists of four octets (e.g., 192.168.0.1).
- **Limited Addresses**: Has a maximum of about 4.3 billion unique addresses.

---

## IP Classes
**IP Classes** categorize IPv4 addresses based on their leading bits.

### Classes:
- **Class A**: 0.0.0.0 to 127.255.255.255
- **Class B**: 128.0.0.0 to 191.255.255.255
- **Class C**: 192.0.0.0 to 223.255.255.255
- **Class D**: 224.0.0.0 to 239.255.255.255 (Multicast)
- **Class E**: 240.0.0.0 to 255.255.255.255 (Experimental)

---

## Ipconfig
**ipconfig** is a command-line utility used to display the IP address configuration of a Windows device.

### Key Points:
- **Common Commands**:
  - `ipconfig`: Displays basic configuration.
  - `ipconfig /all`: Displays detailed configuration.
  - `ipconfig /release` & `ipconfig /renew`: Release and renew DHCP leases.

---

## Reserved Addresses
Certain IP addresses are reserved for special purposes and cannot be assigned to hosts.

### Key Reserved Addresses:
- **Loopback Address**: 127.0.0.1 (used for testing local network software).
- **Private Addresses**: 
  - 10.0.0.0 - 10.255.255.255
  - 172.16.0.0 - 172.31.255.255
  - 192.168.0.0 - 192.168.255.255
- **Broadcast Address**: Used to communicate with all devices in a network segment.

---
