# Networking Essentials

## What is a Network?
- A **network** is a collection of computers, servers, and other devices interconnected to share resources and communicate.
- Networks allow **data exchange** and **resource sharing** (e.g., files, applications, internet connections) across multiple devices.
- Networks vary in size and scope, from small local area networks (LANs) to extensive wide area networks (WANs) like the internet.

## OSI Model

### What’s the OSI Model?
- The **OSI (Open Systems Interconnection) model** is a seven-layer framework standardizing network communication functions, ensuring **interoperability** across various devices and platforms.
- Each layer performs specific functions and communicates with adjacent layers, allowing seamless data transfer from source to destination.

### Layers of the OSI Model
1. **Physical Layer**
2. **Data Link Layer**
3. **Network Layer**
4. **Transport Layer**
5. **Session Layer**
6. **Presentation Layer**
7. **Application Layer**

## How Systems Communicate Through OSI Layers
- Systems communicate by **encapsulating data** as it moves down the layers on the sender’s side and **decapsulating data** on the receiver’s side.
- **Encapsulation Process**:
  - **Application to Presentation Layer**: Data is prepared and formatted.
  - **Transport Layer**: Adds source and destination ports.
  - **Network Layer**: Adds source and destination IP addresses.
  - **Data Link Layer**: Adds MAC addresses and other framing data.
  - **Physical Layer**: Converts data to electrical signals, optical signals, or radio waves.
- **Decapsulation** reverses this process on the receiver’s side, moving data up each layer.

---

# Layers in Detail

## Physical Layer
- The **Physical Layer** (Layer 1) is responsible for the actual **physical connection** between devices, handling the transmission of raw bits over media like cables or radio waves.
- Physical layer tasks include:
  - **Voltage transmission**, **bit rate control**, and **physical media selection**.
  - Ensuring signals are interpreted correctly as binary data (1s and 0s).

## Network Topologies
- **Network topology** describes the **layout** and **structure** of devices in a network.
  - **Bus Topology**: All devices share a single communication line.
  - **Star Topology**: Devices connect to a central hub, providing a single point of failure.
  - **Ring Topology**: Devices form a circular network, where data flows in one or both directions.
  - **Mesh Topology**: Every device has a direct connection to every other device, offering redundancy and fault tolerance.

## Data Link Layer
- The **Data Link Layer** (Layer 2) handles **node-to-node data transfer** and **error detection**.
- Divided into two sub-layers:
  - **MAC (Media Access Control)**: Manages access to the physical media.
  - **LLC (Logical Link Control)**: Provides error checking and flow control.
- Ensures that frames are correctly formed, transmitted, and acknowledged.

## ARP Protocol
- **ARP (Address Resolution Protocol)** maps **IP addresses** to **MAC addresses**.
- It operates within the **Data Link Layer** and is essential for devices to discover each other on local networks.
- When a device needs to communicate with another, it checks the ARP cache or broadcasts an **ARP request** to find the destination MAC address.

## ARP Cache
- **ARP Cache** stores **recently resolved IP-to-MAC mappings** to speed up future communications.
- **Security Consideration**: The ARP cache is vulnerable to **ARP spoofing**, where attackers can trick a device into associating the wrong MAC address with an IP address.

## Network Layer
- The **Network Layer** (Layer 3) handles **routing** and **logical addressing**, primarily through IP addresses.
- Key Functions:
  - **Routing**: Determines the best path for data to travel across multiple networks.
  - **Logical Addressing**: Uses IP addresses to uniquely identify devices on a network.
  - **Fragmentation**: Splits large packets into smaller ones to meet network requirements.
- **Protocols**: Common protocols in this layer include **IP (Internet Protocol)**, **ICMP (Internet Control Message Protocol)**, and **IGMP (Internet Group Management Protocol)**.

