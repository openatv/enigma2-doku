---
title: "Scan option reference"
description: "OpenATV: Scan option reference."
---


This reference covers form variants in the reviewed revision. Hardware and selection determine which subset is shown. Identically named fields can appear in different places. **Technical expressions are source-code search aids, not commands to paste into the receiver.** `nim` denotes a tuner, `currLnb` the selected LNB profile, and `Sat` a satellite assignment. Configure through the menu.

[Reception overview](../) · [Wiring drawings](../verkabelung/)

## ScanSetup

<h3 id="scansetup-1">Tuner</h3>

<p>Choose the frontend connected to the required signal.</p>

`self.scan_nims`

<h3 id="scansetup-2">Tuner type</h3>

<p>Choose a supported hybrid reception type; this does not add hardware.</p>

`multiType`

<h3 id="scansetup-3">Type of scan</h3>

<p>Choose one transponder, a predefined frequency or a full position/network list.</p>

`self.scan_type`

<h3 id="scansetup-4">Network scan</h3>

<p>Read NIT data for additional frequencies; requires a receivable initial carrier.</p>

`self.scan_networkScan`

<h3 id="scansetup-5">Clear before scan</h3>

<p>No adds/updates; Yes removes services in the affected scan scope; Keep feeds is a limited exception.</p>

`self.scan_clearallservices`

<h3 id="scansetup-6">Only free scan</h3>

<p>Include only services signalled as free; this does not decrypt services.</p>

`self.scan_onlyfree`

<h3 id="scansetup-7">Type of scan</h3>

<p>Choose one transponder, a predefined frequency or a full position/network list.</p>

`self.scan_typecable`

<h3 id="scansetup-8">Type of scan</h3>

<p>Choose one transponder, a predefined frequency or a full position/network list.</p>

`self.scan_typeterrestrial`

<h3 id="scansetup-9">System</h3>

<p>Match DVB-S/S2, DVB-T/T2 or ATSC to the transmission and frontend.</p>

`self.scan_sat.system`

<h3 id="scansetup-10">Satellite</h3>

<p>Choose an orbital position supplied by the configured installation.</p>

`self.scan_satselection[index_to_scan]`

<h3 id="scansetup-11">Frequency</h3>

<p>Enter frequency in the displayed unit. Normal scans use RF frequency; Unicable fields use the explicitly assigned User Band.</p>

`self.scan_sat.frequency`

<h3 id="scansetup-12">Inversion</h3>

<p>Spectrum inversion matching the transmission; use Auto where suitably supported.</p>

`self.scan_sat.inversion`

<h3 id="scansetup-13">Symbol rate</h3>

<p>Carrier symbol rate from operator data. Do not confuse kSym/s with MSym/s.</p>

`self.scan_sat.symbolrate`

<h3 id="scansetup-14">Polarization</h3>

<p>H/V or L/R matching the service and LNB.</p>

`self.scan_sat.polarization`

<h3 id="scansetup-15">Use frequency or channel</h3>

<p>Specify a terrestrial carrier by frequency or regional channel number.</p>

`self.scan_input_as`

<h3 id="scansetup-16">Type of scan</h3>

<p>Choose one transponder, a predefined frequency or a full position/network list.</p>

`self.scan_typeatsc`

<h3 id="scansetup-17">FEC</h3>

<p>Carrier error-correction rate; choose the matching system variant or Auto where appropriate.</p>

`self.scan_sat.fec`

<h3 id="scansetup-18">Modulation</h3>

<p>Select the carrier modulation, such as QPSK/8PSK or QAM.</p>

`self.scan_sat.modulation`

<h3 id="scansetup-19">Transponder</h3>

<p>Choose a prepared frequency-list entry; its data can become outdated.</p>

`self.preDefTransponders`

<h3 id="scansetup-20">Frequency</h3>

<p>Enter frequency in the displayed unit. Normal scans use RF frequency; Unicable fields use the explicitly assigned User Band.</p>

`self.scan_cab.frequency`

<h3 id="scansetup-21">Inversion</h3>

<p>Spectrum inversion matching the transmission; use Auto where suitably supported.</p>

`self.scan_cab.inversion`

<h3 id="scansetup-22">Symbol rate</h3>

<p>Carrier symbol rate from operator data. Do not confuse kSym/s with MSym/s.</p>

`self.scan_cab.symbolrate`

<h3 id="scansetup-23">Modulation</h3>

<p>Select the carrier modulation, such as QPSK/8PSK or QAM.</p>

`self.scan_cab.modulation`

<h3 id="scansetup-24">FEC</h3>

<p>Carrier error-correction rate; choose the matching system variant or Auto where appropriate.</p>

`self.scan_cab.fec`

<h3 id="scansetup-25">FEC</h3>

<p>Carrier error-correction rate; choose the matching system variant or Auto where appropriate.</p>

`self.scan_sat.fec_s2`

<h3 id="scansetup-26">Roll-off</h3>

<p>S2 signal shaping parameter from transmission data.</p>

`self.scan_sat.rolloff`

<h3 id="scansetup-27">Pilot</h3>

<p>Match S2 pilot symbols to the transmission or use supported automatic detection.</p>

`self.scan_sat.pilot`

<h3 id="scansetup-28">Transport Stream Type</h3>

<p>Choose single-stream or multistream reception; MIS requires suitable hardware and parameters.</p>

`self.scan_sat.is_id_bool`

<h3 id="scansetup-29">T2MI PLP</h3>

<p>Enable T2-MI path selection where supported by the service and hardware.</p>

`self.scan_sat.t2mi_plp_id_bool`

<h3 id="scansetup-30">Transponder</h3>

<p>Choose a prepared frequency-list entry; its data can become outdated.</p>

`self.CableTransponders`

<h3 id="scansetup-31">System</h3>

<p>Match DVB-S/S2, DVB-T/T2 or ATSC to the transmission and frontend.</p>

`self.scan_ter.system`

<h3 id="scansetup-32">Inversion</h3>

<p>Spectrum inversion matching the transmission; use Auto where suitably supported.</p>

`self.scan_ter.inversion`

<h3 id="scansetup-33">Bandwidth</h3>

<p>Terrestrial channel bandwidth, for example 6/7/8 MHz depending on transmission.</p>

`self.scan_ter.bandwidth`

<h3 id="scansetup-34">Code rate HP</h3>

<p>Error correction for the high-priority DVB-T stream.</p>

`self.scan_ter.fechigh`

<h3 id="scansetup-35">Code rate LP</h3>

<p>Error correction for the low-priority DVB-T stream in hierarchical transmission.</p>

`self.scan_ter.feclow`

<h3 id="scansetup-36">Modulation</h3>

<p>Select the carrier modulation, such as QPSK/8PSK or QAM.</p>

`self.scan_ter.modulation`

<h3 id="scansetup-37">Transmission mode</h3>

<p>OFDM transmission mode matching the terrestrial multiplex.</p>

`self.scan_ter.transmission`

<h3 id="scansetup-38">Guard Interval</h3>

<p>Guard interval for propagation delays; must match the transmission.</p>

`self.scan_ter.guard`

<h3 id="scansetup-39">Hierarchy info</h3>

<p>Hierarchical DVB-T modulation according to transmission data.</p>

`self.scan_ter.hierarchy`

<h3 id="scansetup-40">Region</h3>

<p>Choose the matching regional frequency or provider definition.</p>

`self.TerrestrialRegion`

<h3 id="scansetup-41">System</h3>

<p>Match DVB-S/S2, DVB-T/T2 or ATSC to the transmission and frontend.</p>

`self.scan_ats.system`

<h3 id="scansetup-42">Channel</h3>

<p>RF channel number in a terrestrial scan; allocated UB identifier in SCR setup.</p>

`self.scan_ter.channel`

<h3 id="scansetup-43">Frequency</h3>

<p>Enter frequency in the displayed unit. Normal scans use RF frequency; Unicable fields use the explicitly assigned User Band.</p>

`self.scan_ter.frequency`

<h3 id="scansetup-44">PLP ID</h3>

<p>Physical Layer Pipe within the DVB-T2 multiplex; not a programme number.</p>

`self.scan_ter.plp_id`

<h3 id="scansetup-45">Transponder</h3>

<p>Choose a prepared frequency-list entry; its data can become outdated.</p>

`self.TerrestrialTransponders`

<h3 id="scansetup-46">Frequency</h3>

<p>Enter frequency in the displayed unit. Normal scans use RF frequency; Unicable fields use the explicitly assigned User Band.</p>

`self.scan_ats.frequency`

<h3 id="scansetup-47">Inversion</h3>

<p>Spectrum inversion matching the transmission; use Auto where suitably supported.</p>

`self.scan_ats.inversion`

<h3 id="scansetup-48">Modulation</h3>

<p>Select the carrier modulation, such as QPSK/8PSK or QAM.</p>

`self.scan_ats.modulation`

<h3 id="scansetup-49">Input Stream ID</h3>

<p>Identifier of the MIS component stream to receive.</p>

`self.scan_sat.is_id`

<h3 id="scansetup-50">PLS mode</h3>

<p>Physical-layer scrambling mode of the signal.</p>

`self.scan_sat.pls_mode`

<h3 id="scansetup-51">PLS code</h3>

<p>Service-specific physical-layer scrambling code; not a decryption key.</p>

`self.scan_sat.pls_code`

<h3 id="scansetup-52">T2MI PLP ID</h3>

<p>Desired PLP within the transported T2-MI signal.</p>

`self.scan_sat.t2mi_plp_id`

<h3 id="scansetup-53">T2MI PID</h3>

<p>PID carrying T2-MI data in the transport stream.</p>

`self.scan_sat.t2mi_pid`

<h3 id="scansetup-54">Satellite enabled for scan</h3>

<p>Include or exclude this configured position in a multisatellite scan.</p>

`sat`

<h3 id="scansetup-55">Transponder</h3>

<p>Choose a prepared frequency-list entry; its data can become outdated.</p>

`self.ATSCTransponders`

<h3 id="scansetup-56">Network enabled for scan</h3>

<p>Include this available network in the automatic scan.</p>

`nimconfig`


## Positioner

<h3 id="positioner-1">ONID</h3>

<p>Original Network ID of the reference transponder for identification.</p>

`self.transponderOnid`

<h3 id="positioner-2">TSID</h3>

<p>Transport Stream ID of the reference transponder for identification.</p>

`self.transponderTsid`

<h3 id="positioner-3">Tune</h3>

<p>Use manually entered or predefined reference tuning parameters.</p>

`self.tuning.type`

<h3 id="positioner-4">Satellite</h3>

<p>Choose an orbital position supplied by the configured installation.</p>

`self.tuning.sat`

<h3 id="positioner-5">Frequency</h3>

<p>Enter frequency in the displayed unit. Normal scans use RF frequency; Unicable fields use the explicitly assigned User Band.</p>

`self.scan_sat.frequency`

<h3 id="positioner-6">Polarization</h3>

<p>H/V or L/R matching the service and LNB.</p>

`self.scan_sat.polarization`

<h3 id="positioner-7">Symbol rate</h3>

<p>Carrier symbol rate from operator data. Do not confuse kSym/s with MSym/s.</p>

`self.scan_sat.symbolrate`

<h3 id="positioner-8">Transponder</h3>

<p>Choose a prepared frequency-list entry; its data can become outdated.</p>

`self.tuning.transponder`

<h3 id="positioner-9">System</h3>

<p>Match DVB-S/S2, DVB-T/T2 or ATSC to the transmission and frontend.</p>

`self.scan_sat.system`

<h3 id="positioner-10">FEC</h3>

<p>Carrier error-correction rate; choose the matching system variant or Auto where appropriate.</p>

`self.scan_sat.fec`

<h3 id="positioner-11">Inversion</h3>

<p>Spectrum inversion matching the transmission; use Auto where suitably supported.</p>

`self.scan_sat.inversion`

<h3 id="positioner-12">Modulation</h3>

<p>Select the carrier modulation, such as QPSK/8PSK or QAM.</p>

`self.scan_sat.modulation`

<h3 id="positioner-13">FEC</h3>

<p>Carrier error-correction rate; choose the matching system variant or Auto where appropriate.</p>

`self.scan_sat.fec_s2`

<h3 id="positioner-14">Roll-off</h3>

<p>S2 signal shaping parameter from transmission data.</p>

`self.scan_sat.rolloff`

<h3 id="positioner-15">Pilot</h3>

<p>Match S2 pilot symbols to the transmission or use supported automatic detection.</p>

`self.scan_sat.pilot`

<h3 id="positioner-16">T2MI PLP ID</h3>

<p>Desired PLP within the transported T2-MI signal.</p>

`self.scan_sat.t2mi_plp_id`

<h3 id="positioner-17">T2MI PID</h3>

<p>PID carrying T2-MI data in the transport stream.</p>

`self.scan_sat.t2mi_pid`

<h3 id="positioner-18">Input Stream ID</h3>

<p>Identifier of the MIS component stream to receive.</p>

`self.scan_sat.is_id`

<h3 id="positioner-19">PLS mode</h3>

<p>Physical-layer scrambling mode of the signal.</p>

`self.scan_sat.pls_mode`

<h3 id="positioner-20">PLS code</h3>

<p>Service-specific physical-layer scrambling code; not a decryption key.</p>

`self.scan_sat.pls_code`


## CableScan

<h3 id="cablescan-1">Tuner</h3>

<p>Choose the frontend connected to the required signal.</p>

`self.scan_nims`

<h3 id="cablescan-2">Frequency</h3>

<p>Enter frequency in the displayed unit. Normal scans use RF frequency; Unicable fields use the explicitly assigned User Band.</p>

`config.plugins.CableScan.frequency`

<h3 id="cablescan-3">Symbol rate</h3>

<p>Carrier symbol rate from operator data. Do not confuse kSym/s with MSym/s.</p>

`config.plugins.CableScan.symbolrate`

<h3 id="cablescan-4">Modulation</h3>

<p>Select the carrier modulation, such as QPSK/8PSK or QAM.</p>

`config.plugins.CableScan.modulation`

<h3 id="cablescan-5">Network ID</h3>

<p>Provider network identifier from regional operator data.</p>

`config.plugins.CableScan.networkid`

<h3 id="cablescan-6">Use official channel numbering</h3>

<p>Use numbering supplied by the supported provider.</p>

`config.plugins.CableScan.keepnumbering`

<h3 id="cablescan-7">HD list</h3>

<p>Select the provider HD list where available.</p>

`config.plugins.CableScan.hdlist`

<h3 id="cablescan-8">Enable auto cable scan</h3>

<p>Enable later automatic CableScan updates; account for timing and standby behaviour.</p>

`config.plugins.CableScan.auto`


## FastScan

<h3 id="fastscan-1">Tuner</h3>

<p>Choose the frontend connected to the required signal.</p>

`self.scan_nims`

<h3 id="fastscan-2">Provider</h3>

<p>Select a receivable provider supported by this module.</p>

`self.scan_provider`

<h3 id="fastscan-3">HD list</h3>

<p>Select the provider HD list where available.</p>

`self.scan_hd`

<h3 id="fastscan-4">Use fastscan channel numbering</h3>

<p>Use channel numbering from FastScan tables.</p>

`self.scan_keepnumbering`

<h3 id="fastscan-5">Use fastscan channel names</h3>

<p>Use service names from FastScan tables.</p>

`self.scan_keepsettings`

<h3 id="fastscan-6">Create separate radio user bouquet</h3>

<p>Put radio services in a separate user bouquet.</p>

`self.scan_create_radio_bouquet`

<h3 id="fastscan-7">Enable auto fast scan</h3>

<p>Enable automatic updates for supported providers.</p>

`config.misc.fastscan.auto`

<h3 id="fastscan-8">Enable auto fast scan for provider</h3>

<p>Select this provider for automatic FastScan runs.</p>

`self.config_autoproviders[provider[0]]`


## Blindscan

<h3 id="blindscan-1">Tuner</h3>

<p>Choose the frontend connected to the required signal.</p>

`self.scan_nims`

<h3 id="blindscan-2">Satellite</h3>

<p>Select the satellite you wish to search</p>

`self.scan_satselection[self.getSelectedSatIndex(index_to_scan)]`

<h3 id="blindscan-3">Search type</h3>

<p>&quot;channel scan&quot; searches for channels and saves them to your receiver; &quot;transponder scan&quot; does a transponder search and displays the results allowing user to select some or all transponder. Both options save the results in satellites.xml format under /tmp</p>

`config.blindscan.search_type`

<h3 id="blindscan-4">Only scan unknown transponders</h3>

<p>If you select &quot;yes&quot; the scan will only search transponders not listed in satellites.xml</p>

`config.blindscan.dont_scan_known_tps`

<h3 id="blindscan-5">Transponder selected for scan</h3>

<p>Select a discovered Blindscan transponder for the following service scan.</p>

`cb`

<h3 id="blindscan-6">Polarisation</h3>

<p>Set the search boundary within the range matching the LNB; observe the MHz limits displayed in the form.</p>

`config.blindscan.polarization`

<h3 id="blindscan-7">Scan start symbolrate</h3>

<p>Symbol rate values are in megasymbols; enter a value between 1 and 44</p>

`config.blindscan.start_symbol`

<h3 id="blindscan-8">Scan stop symbolrate</h3>

<p>Symbol rate values are in megasymbols; enter a value between 2 and 45</p>

`config.blindscan.stop_symbol`

<h3 id="blindscan-9">Clear before scan</h3>

<p>No adds/updates; Yes removes services in the affected scan scope; Keep feeds is a limited exception.</p>

`config.blindscan.clearallservices`

<h3 id="blindscan-10">Only free scan</h3>

<p>If you select &quot;yes&quot; the scan will only save channels that are not encrypted; &quot;no&quot; will find encrypted and non-encrypted channels.</p>

`config.blindscan.onlyFTA`

<h3 id="blindscan-11">Disable remove duplicates</h3>

<p>Retain duplicate carrier candidates; duplicates are normally removed.</p>

`config.blindscan.disable_remove_duplicate_tps`

<h3 id="blindscan-12">Filter out adjacent satellites</h3>

<p>When a neighbouring satellite is very strong this avoids searching transponders known to be coming from the neighbouring satellite.</p>

`config.blindscan.filter_off_adjacent_satellites`

<h3 id="blindscan-13">Scan start frequency</h3>

<p>Lower scan boundary in MHz within the range matching the LNB. Observe the limit displayed in the form.</p>

`self.blindscan_C_band_start_frequency`

<h3 id="blindscan-14">Scan stop frequency</h3>

<p>Upper scan boundary in MHz within the range matching the LNB. It must exceed the start frequency.</p>

`self.blindscan_C_band_stop_frequency`

<h3 id="blindscan-15">Scan Step in MHz(TBS5925)</h3>

<p>Smaller steps takes longer but scan is more thorough</p>

`config.blindscan.step_mhz_tbs5925`

<h3 id="blindscan-16">Disable sync with known transponders</h3>

<p>Avoid matching measured parameters to known transponders; normally leave this disabled.</p>

`config.blindscan.disable_sync_with_known_tps`

<h3 id="blindscan-17">Scan start frequency</h3>

<p>Lower scan boundary in MHz within the range matching the LNB. Observe the limit displayed in the form.</p>

`self.blindscan_Ku_band_start_frequency`

<h3 id="blindscan-18">Scan stop frequency</h3>

<p>Upper scan boundary in MHz within the range matching the LNB. It must exceed the start frequency.</p>

`self.blindscan_Ku_band_stop_frequency`

<h3 id="blindscan-19">LNB inversion</h3>

<p>Select inverted only for an LNB with its oscillator above the reception frequency. Normal is the usual default.</p>

`config.blindscan.user_defined_lnb_inversion`

<h3 id="blindscan-20">Scan start frequency</h3>

<p>Lower scan boundary in MHz within the range matching the LNB. Observe the limit displayed in the form.</p>

`self.blindscan_user_defined_lnb_inverted_start_frequency`

<h3 id="blindscan-21">Scan stop frequency</h3>

<p>Upper scan boundary in MHz within the range matching the LNB. It must exceed the start frequency.</p>

`self.blindscan_user_defined_lnb_inverted_stop_frequency`

<h3 id="blindscan-22">Scan start frequency</h3>

<p>Lower scan boundary in MHz within the range matching the LNB. Observe the limit displayed in the form.</p>

`self.blindscan_user_defined_lnb_start_frequency`

<h3 id="blindscan-23">Scan stop frequency</h3>

<p>Upper scan boundary in MHz within the range matching the LNB. It must exceed the start frequency.</p>

`self.blindscan_user_defined_lnb_stop_frequency`

Further reading: [Unicable](../unicable/), [manual scanning](../manueller-suchlauf/), [ABM](../autobouquetsmaker/) and [DAB+](../dabplus/).

Sources and verification: [Empfang](../quellen/).
