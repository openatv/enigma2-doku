---
title: "Network Mount Settings"
description: "Network Mount Settings: options, built-in help and menu location in OpenATV."
editUrl: false
pagefind: true
---

This reference contains the help text provided by OpenATV. The open dialog and selected options determine which entries are visible.

## Where do I find it?

**Main Menu → Setup → Network → Network Mounts Overview → Network Mount Settings**

Search also matches technical keys. [Back to the directory](../../)

<h2 id="option-ddfd373bc897">Enabled</h2>

<p>Enable or disable this network mount. Disabling the mount will not delete its definition.</p>

<details>
<summary>Reference & notes</summary>

`self.enabled`

Setup level: Simple.

</details>

<h2 id="option-bf65d0a227f5">Protocol</h2>

<p>Select the share protocol to be used, SMB (Windows-style shares) or NFS (Mac and Linux shares).</p>

<details>
<summary>Reference & notes</summary>

`self.protocol`

Setup level: Simple.

</details>

<h2 id="option-d84add72d6b7">Server</h2>

<p>Enter the hostname or IP address of the network share&#x27;s server.</p>

<details>
<summary>Reference & notes</summary>

`self.server`

Setup level: Simple.

</details>

<h2 id="option-7e6a6a90d86c">Remote path</h2>

<p>Enter the remote share name (SMB) or exported path (NFS) on the server.</p>

<details>
<summary>Reference & notes</summary>

`self.remotePath`

Setup level: Simple.

</details>

<h2 id="option-5ba9ec234a61">Local share</h2>

<p>Enter the local directory name to be used as the local mount for the remote share.</p>

<details>
<summary>Reference & notes</summary>

`self.shareName`

Setup level: Simple.

</details>

<h2 id="option-9528c75e5622">Mount mode</h2>

<p>Select when, and how, the remote share will be mounted. For most purposes autofs is recommended.</p>

<details>
<summary>Reference & notes</summary>

`self.mode`

Setup level: Simple.

</details>

<h2 id="option-8efcd57c4d53">Use as HDD replacement</h2>

<p>When enabled, this share is mounted to /media/hdd instead of its own /media/net path. Only use this if the share is reliably available.</p>

<details>
<summary>Reference & notes</summary>

`self.hddReplacement`

Setup level: Simple.

</details>

<h2 id="option-d71ac0495eec">Access mode</h2>

<p>Select the mode of access, Read/Write or Read-Only, for this share mount.</p>

<details>
<summary>Reference & notes</summary>

`self.accessMode`

Setup level: Simple.

</details>

<h2 id="option-06d5df43dada">NFS version</h2>

<p>Select a specific NFS version to force a specific NFS protocol version instead of allowing an automatic negotiation.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsVersion`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-8d06ead8596b">Use NFS file locking</h2>

<p>Select if file locking is available. Select &#x27;No&#x27; to add &#x27;nolock&#x27; to the settings which is most compatible with older/simple NFS servers.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsLocking`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-155dd83f3fd0">Read block size</h2>

<p>Select the read block buffer size (rsize) mount option. Use &#x27;Automatic&#x27; to allow the kernel and server to negotiate the optimal size.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsRsize`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-1089951c3eff">Write block size</h2>

<p>Select the write block buffer size (wsize) mount option. Use &#x27;Automatic&#x27; to allow the kernel and server to negotiate the optimal size.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsWsize`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-1e83c59da8e9">Timeout</h2>

<p>Enter how long to wait for a response before retrying (or failing, with &#x27;Give up if unreachable&#x27; below). Enter &#x27;0&#x27; to use the kernel&#x27;s internal default instead of a fixed value.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsTimeo`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-b8fba7006bb9">Soft mount</h2>

<p>Select &#x27;Soft mount&#x27; to make file access return an error once the server stops responding instead of retrying forever. The &#x27;Hard mount&#x27; option, the default, protects against silent data loss but can hang programs accessing this share while the server is unreachable.</p>

<details>
<summary>Reference & notes</summary>

`self.nfsSoft`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-53c01de79c98">Username</h2>

<p>Enter the username to be used to access this host&#x27;s shares if they require authentication credentials.</p>

<details>
<summary>Reference & notes</summary>

`self.username`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-fb39a45260b7">Password</h2>

<p>Enter the password to be used to access this host&#x27;s shares if they require authentication credentials.</p>

<details>
<summary>Reference & notes</summary>

`self.password`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-ccce3a5a0384">SMB version</h2>

<p>Select a specific SMB protocol version to use instead of allowing an automatic negotiation. Use &#x27;Legacy (SMB1)&#x27; only for older servers that do not support the newer and more secure SMB2/SMB3 protocols.</p>

<details>
<summary>Reference & notes</summary>

`self.smbVersion`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-d9533be6d359">Character set</h2>

<p>Select the character set (iocharset) to be used to match/translate remote filenames.</p>

<details>
<summary>Reference & notes</summary>

`self.smbCharset`

Setup level: Simple.

Visibility depends on other options or the dialog.

</details>

<h2 id="option-0a8d81c36752">Optional arguments</h2>

<p>Enter optional mount arguments not provided for in the configuration settings above. Multiple arguments should be comma-separated. Invalid/Inappropriate entries can cause the mount to fail!</p>

<details>
<summary>Reference & notes</summary>

`self.options`

Setup level: Simple.

</details>

---

Source: [OpenATV setup.xml](https://github.com/openatv/enigma2/blob/fdc9347241245fd18fd0b8bc93727237189c916c/data/setup.xml) · `fdc9347241`.
