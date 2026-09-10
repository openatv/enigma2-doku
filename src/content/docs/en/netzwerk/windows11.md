---
title: Prepare Windows 11 for network shares
description: Share a Windows folder with OpenATV using a private network, account and password, share/NTFS permissions and firewall rules; also use Windows as an SMB client.
---

First establish direction: **when the receiver accesses a Windows folder, Windows is the SMB server.** When File Explorer accesses a NAS or receiver, Windows is the client. Changing Windows SMB client settings does not automatically repair inbound connections from the receiver.

## Windows provides storage for the receiver

This example uses PC **`MEDIA-PC`**, user **`e2recorder`** and share **`Recordings`**. These names are examples. PC and receiver need a mutually reachable home network; an isolated guest Wi-Fi is unsuitable. Keep the PC powered on and awake during recording and playback.

### 1. Change Public to Private

Open **Start → Settings → Network & internet**. Select **Ethernet** for a cable connection, or **Wi-Fi → the connected network**. Set **Network profile type** to **Private network**. Do this only on your own trusted network; public networks retain their public profile. [Microsoft: Network profiles](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/essential-network-settings-and-tasks-in-windows).

An address change can later break the receiver's connection. Use a reliably resolved computer name or a router DHCP reservation when connecting by a stable IP.

### 2. Enable discovery and file sharing

Open **Settings → Network & internet → Advanced network settings → Advanced sharing settings**, or search Settings for “Advanced sharing settings”.

Under **Private networks**, enable **Network discovery** and **File and printer sharing**. Under **All networks**, keep **Password protected sharing on**. Labels can vary slightly after Windows updates.

Discovery helps devices find each other; it does not create a shared folder or grant permissions. See Microsoft's [Network file sharing](https://support.microsoft.com/en-us/windows/experience/connectivity-networking/file-sharing-over-a-network-in-windows); this handbook deliberately uses authenticated accounts.

### 3. Create a dedicated account and password

Open **Settings → Accounts → Other users → Add account**. Choose **I don't have this person's sign-in information**, then **Add a user without a Microsoft account**. Create `e2recorder` with its own password and retain the **Standard user** account type. [Microsoft: Manage user accounts](https://support.microsoft.com/en-us/windows/security/identity-signin/manage-user-accounts-in-windows).

This account is for file access and needs no administrator privileges. Use its actual password, not a Windows Hello PIN. A PIN used for local PC sign-in is not the receiver's SMB password.

### 4. Configure the folder and both permission layers

Create a dedicated local folder such as **`C:\E2Recordings`** on suitable storage with enough free space. Use an actually available local directory, not an online-only cloud placeholder.

1. Right-click the folder → **Properties → Sharing → Advanced Sharing**.
2. Enable **Share this folder** and use share name **`Recordings`**.
3. Under **Permissions**, add `MEDIA-PC\e2recorder`. Allow **Read and Change** for recording; Full Control is unnecessary. Read alone is sufficient for playback.
4. Under **Properties → Security**, add the same account and allow **Modify** on this folder for recording. On NTFS storage this is the second independent permission layer.
5. Apply and check that another rule does not deny access. Avoid sharing the entire drive unnecessarily.

**Share permissions and file permissions must both allow the operation.** Write access at only one layer is insufficient. Recording workflows also need renaming and deletion, including associated metadata files.

### 5. Allow the required firewall traffic

Keep Windows Firewall **enabled**. If access is blocked, open **Windows Security → Firewall & network protection → Advanced settings**, or run `wf.msc`.

Under **Inbound Rules**, check the existing **File and Printer Sharing (SMB-In)** rule for **TCP 445**. It must allow traffic and be enabled for the **Private profile**. Where appropriate, restrict its scope to the receiver address or local subnet. Do not enable unrelated rules for every profile.

For discovery, also check the intended **Network Discovery** rules under Private. A third-party firewall must permit the corresponding intended access too. See Microsoft on [SMB sharing ports](https://learn.microsoft.com/en-us/windows-server/storage/file-server/best-practices-analyzer/smb-open-file-sharing-ports) and [securing SMB traffic](https://learn.microsoft.com/en-us/windows-server/storage/file-server/smb-secure-traffic).

**Allowing SMB does not guarantee appearance in every discovery tool.** Windows and Enigma2 may use different discovery mechanisms. Manually entering the server is a normal workflow and does not require SMB1. A blocked ping alone does not prove TCP 445 is blocked.

### 6. Connect from OpenATV

Create an [SMB/CIFS mount](../smb-cifs/) on the receiver:

| Field | Value for this example |
| --- | --- |
| Server | Reachable name `MEDIA-PC` or its actual IP address |
| Remote path | `Recordings`, not `C:\E2Recordings` |
| Username | `e2recorder` |
| Password | This Windows account's password |
| Optional arguments | If account qualification is needed: `domain=MEDIA-PC` |
| SMB version / Mode | SMB3 / autofs |
| Local share | `windows-recordings` |

Open `/media/autofs/windows-recordings`. Test reading, creating, renaming and deleting an expendable file. Then select the [recording destination](../../speicher/nas-aufnahmen/) and test a short recording. Mount options cannot compensate for a PC that remains off or asleep; see [outages and spinners](../autofs-fstab/).

## Windows accesses a NAS or receiver as a client

In File Explorer, open **`\\SERVER\Recordings`**, replacing server/share with the NAS or Samba server's values. For a drive letter, use **This PC → … → Map network drive**, choose an unused letter and **Connect using different credentials**. Sign in using an account **on the server**.

An NFS export alone is not an SMB share for Explorer. To access an Enigma2 receiver over SMB, it needs a configured Samba server and shared directory. **Samba may use a separate password database**; Linux root's `passwd` command does not automatically create a Samba account. Follow that server configuration's account setup. [SFTP](../fernzugriff/) is another option for transferring receiver files.

If Windows remembers old credentials, disconnect the affected share and check its entry in **Credential Manager → Windows Credentials**. Change only the entry for this server. Other connections still open to the same server can prevent using a second account simultaneously.

## Windows 11 signing and outdated advice

Windows 11 **24H2 Pro, Enterprise and Education** require inbound and outbound SMB signing by default; Home defaults differ. Policies can impose additional requirements. Use compatible, current clients/servers and password-protected accounts. **Do not disable signing as a general fix or enable insecure guest logons.** [Microsoft: SMB signing](https://learn.microsoft.com/en-us/windows-server/storage/file-server/smb-signing).

**Do not install SMB1 or disable the firewall/password protection.** Those changes do not make outdated NAS firmware or an incompatible receiver client a suitable modern setup. Instead check versions, permissions, account, path and targeted firewall rules. [Microsoft: SMB1 is obsolete](https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/smbv1-not-installed-by-default-in-windows).

**Verification:** Compared with current Microsoft documentation and OpenATV's mount dialog. No user accounts, shares, network profiles or firewall rules were changed on the operator's PC; an end-to-end Windows recording test remains outstanding.
