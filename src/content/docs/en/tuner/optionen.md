---
title: "Tuner option reference: all 124 form variants"
description: "OpenATV: Tuner option reference: all 124 form variants."
---


This reference covers form variants in the reviewed revision. Hardware and selection determine which subset is shown. Identically named fields can appear in different places. **Technical expressions are source-code search aids, not commands to paste into the receiver.** `nim` denotes a tuner, `currLnb` the selected LNB profile, and `Sat` a satellite assignment. Configure through the menu.

[Reception overview](../) · [Wiring drawings](../verkabelung/)

## Satconfig

<h3 id="satconfig-1">Measured current</h3>

<p>Current supplied to the LNB and positioner.</p>

`self.inputPowerValue`

<h3 id="satconfig-2">Inherited User Band</h3>

<p>Readout only: channel and frequency are inherited from the assigned LNB profile for the same single-cable system.</p>

`ConfigSelection(choices=[('inherited', value)], default='inherited')`

<h3 id="satconfig-3">Extra motor options</h3>

<p>Additional motor options allow you to enter details from your motor&#x27;s specifications so Enigma can work out how long it will take to move the dish from one satellite to another.</p>

`self.additionalMotorOptions`

<h3 id="satconfig-4">Configuration / reception type</h3>

<p>Enable the reception type or select simple/advanced satellite mode and the actual tuner relationship.</p>

`configMode`

<h3 id="satconfig-5">LNB</h3>

<p>Allocate a number to the physical LNB you are configuring. You will be able to select this LNB again for other satellites (e.g. motorized dishes) to save setting up the same LNB multiple times.</p>

`Sat.lnb`

<h3 id="satconfig-6">Configuration mode</h3>

<p>Choose simple or advanced satellite mode matching the installation.</p>

`self.nimConfig.dvbs.configMode`

<h3 id="satconfig-7">Satellite</h3>

<p>Choose an orbital position supplied by the configured installation.</p>

`self.nimConfig.dvbs.advanced.sats`

<h3 id="satconfig-8">Satellite</h3>

<p>Select the satellite from which your dish is receiving its signal. If you are unsure select &#x27;Automatic&#x27; and the receiver will attempt to determine this for you.</p>

`nim.diseqcA`

<h3 id="satconfig-9">Press OK to select satellites</h3>

<p>Press OK to select a group of satellites to configure in one block.</p>

`nim.pressOKtoList`

<h3 id="satconfig-10">Longitude</h3>

<p>Enter your current longitude. This is the number of degrees you are from zero meridian as a decimal.</p>

`nim.longitude`

<h3 id="satconfig-11">Longitude hemisphere</h3>

<p>Enter if you are in the East or West hemisphere.</p>

`nim.longitudeOrientation`

<h3 id="satconfig-12">Latitude</h3>

<p>Enter your current latitude. This is the number of degrees you are from the equator as a decimal.</p>

`nim.latitude`

<h3 id="satconfig-13">Latitude hemisphere</h3>

<p>Enter if you are North or South of the equator.</p>

`nim.latitudeOrientation`

<h3 id="satconfig-14">Use power measurement</h3>

<p>Detect positioner movement by its current consumption.</p>

`nim.powerMeasurement`

<h3 id="satconfig-15">Type of LNB/Device</h3>

<p>Select the type of LNB/device being used (normally &#x27;Universal&#x27;). If your LNB type is not available select &#x27;User defined&#x27;.</p>

`currLnb.lof`

<h3 id="satconfig-16">Send DiSEqC</h3>

<p>Select &#x27;Yes&#x27; if you are using a multi-switch which requires a DiSEqC Port-A command signal. Select &#x27;No&#x27; for all other setups.</p>

`nim.simpleSingleSendDiSEqC`

<h3 id="satconfig-17">Port A</h3>

<p>Select the satellite which is connected to Port-A of your switch. If you are unsure select &#x27;Automatic&#x27; and the receiver will attempt to determine this for you. If nothing is connected to this port, select &#x27;Nothing connected&#x27;.</p>

`nim.diseqcA`

<h3 id="satconfig-18">Port B</h3>

<p>Select the satellite which is connected to Port-B of your switch. If you are unsure select &#x27;Automatic&#x27; and the receiver will attempt to determine this for you. If nothing is connected to this port, select &#x27;Nothing connected&#x27;.</p>

`nim.diseqcB`

<h3 id="satconfig-19">Auto DiSEqC search order</h3>

<p>Limit the search to the satellite group normally used by this installation.</p>

`autoOrder`

<h3 id="satconfig-20">Rotor turning speed</h3>

<p>Select how quickly the dish should move between satellites.</p>

`nim.turningSpeed`

<h3 id="satconfig-21">H turning speed</h3>

<p>Consult your motor&#x27;s specifications for this information, or leave the default setting.</p>

`nim.turningspeedH`

<h3 id="satconfig-22">V turning speed</h3>

<p>Consult your motor&#x27;s specifications for this information, or leave the default setting.</p>

`nim.turningspeedV`

<h3 id="satconfig-23">Motor step size</h3>

<p>Consult your motor&#x27;s specifications for this information, or leave the default setting.</p>

`nim.tuningstepsize`

<h3 id="satconfig-24">Motor positions</h3>

<p>Consult your motor&#x27;s specifications for this information, or leave the default setting.</p>

`nim.rotorPositions`

<h3 id="satconfig-25">Mode</h3>

<p>Select how the satellite dish is set up. i.e. fixed dish, single LNB, DiSEqC switch, positioner, etc.</p>

`nimConfig.diseqcMode`

<h3 id="satconfig-26">Used service scan type</h3>

<p>Select &#x27;Provider&#x27; to scan from the predefined list of cable multiplexes. Select &#x27;Bands&#x27; to only scan certain parts of the spectrum. Select &#x27;Steps&#x27; to scan in steps of a particular frequency bandwidth.</p>

`self.nimConfig.dvbc.scan_type`

<h3 id="satconfig-27">Region</h3>

<p>Select your region. If it is not available change &#x27;Country&#x27; to &#x27;All&#x27; and select one of the default alternatives.</p>

`self.terrestrialRegions`

<h3 id="satconfig-28">Force Legacy Signal stats</h3>

<p>Select &#x27;Yes&#x27; to use signal values (SNR, etc) calculated from the older API V3. This API version has now been superseded.</p>

`self.nimConfig.force_legacy_signal_stats`

<h3 id="satconfig-29">Priority</h3>

<p>This setting is for special setups only. It gives this LNB higher priority over other LNBs with lower values. The free LNB with the highest priority will be the first LNB selected for tuning services.</p>

`currLnb.prio`

<h3 id="satconfig-30">Unicable device type</h3>

<p>Select SCR LNB, SCR matrix or a user-defined single-cable system.</p>

`currLnb.unicable`

<h3 id="satconfig-31">Externally powered</h3>

<p>Enable this when a power inserter or external supply powers the Unicable device.</p>

`currLnb.powerInserter`

<h3 id="satconfig-32">Tuning algorithm</h3>

<p>SCR timing adjustment, in conjunction with SCR socket and operation of several SCR devices with one cable.</p>

`currLnb.unicableTuningAlgo`

<h3 id="satconfig-33">Increased voltage</h3>

<p>Use increased voltage &#x27;14/18V&#x27; if there are problems when switching the LNB.</p>

`currLnb.increased_voltage`

<h3 id="satconfig-34">DiSEqC mode</h3>

<p>Select &#x27;1.0&#x27; for standard committed switches, &#x27;1.1&#x27; for uncommitted switches, and &#x27;1.2&#x27; for systems using a positioner.</p>

`currLnb.diseqcMode`

<h3 id="satconfig-35">Tone burst</h3>

<p>Select &#x27;A&#x27; or &#x27;B&#x27; if your aerial system requires this, otherwise select &#x27;None&#x27;. If you are unsure select &#x27;None&#x27;.</p>

`currLnb.toneburst`

<h3 id="satconfig-36">DiSEqC 1.0 command</h3>

<p>If you are using a DiSEqC committed switch enter the port letter required to access the LNB used for this satellite.</p>

`currLnb.commitedDiseqcCommand`

<h3 id="satconfig-37">Use circular LNB</h3>

<p>If you are using a circular polarized LNB select &#x27;Yes&#x27;, otherwise select &#x27;No&#x27;.</p>

`nim.simpleDiSEqCSetCircularLNB`

<h3 id="satconfig-38">Port C</h3>

<p>Select the satellite which is connected to Port-C of your switch. If you are unsure select &#x27;Automatic&#x27; and the receiver will attempt to determine this for you. If nothing is connected to this port, select &#x27;Nothing connected&#x27;.</p>

`nim.diseqcC`

<h3 id="satconfig-39">Port D</h3>

<p>Select the satellite which is connected to Port-D of your switch. If you are unsure select &#x27;Automatic&#x27; and the receiver will attempt to determine this for you. If nothing is connected to this port, select &#x27;Nothing connected&#x27;.</p>

`nim.diseqcD`

<h3 id="satconfig-40">Set voltage and 22KHz</h3>

<p>Leave this set to &#x27;Yes&#x27; unless you fully understand why you are adjusting it.</p>

`nim.simpleDiSEqCSetVoltageTone`

<h3 id="satconfig-41">Send DiSEqC only on satellite change</h3>

<p>Select &#x27;Yes&#x27; to only send the DiSEqC command when changing from one satellite to another, or select &#x27;No&#x27; for the DiSEqC command to be resent on every zap.</p>

`nim.simpleDiSEqCOnlyOnSatChange`

<h3 id="satconfig-42">Power threshold in mA</h3>

<p>Minimum difference between idle and moving current.</p>

`nim.powerThreshold`

<h3 id="satconfig-43">Begin time</h3>

<p>Only move the dish quickly after this hour.</p>

`nim.fastTurningBegin`

<h3 id="satconfig-44">End time</h3>

<p>Only move the dish quickly before this hour.</p>

`nim.fastTurningEnd`

<h3 id="satconfig-45">Configuration mode</h3>

<p>Enable cable reception on the actual input. A shared hybrid frontend uses C and T alternately.</p>

`self.nimConfig.dvbc.configMode`

<h3 id="satconfig-46">Tone amplitude</h3>

<p>Your receiver can use tone amplitude. Consult your receiver&#x27;s manual for more information.</p>

`nimConfig.toneAmplitude`

<h3 id="satconfig-47">SCPC optimized search range</h3>

<p>Your receiver can use SCPC optimized search range. Consult your receiver&#x27;s manual for more information.</p>

`nimConfig.scpcSearchRange`

<h3 id="satconfig-48">T2MI RAW Mode</h3>

<p>With T2MI RAW mode disabled (default) we can use single T2MI PLP de-encapsulation. With T2MI RAW mode enabled we can use astra-sm to analyze T2MI</p>

`nimConfig.t2miRawMode`

<h3 id="satconfig-49">Connector</h3>

<p>Select the input connector you want to use.</p>

`nimConfig.input`

<h3 id="satconfig-50">Network ID</h3>

<p>This setting depends on your cable provider and location. If you don&#x27;t know the correct setting refer to the menu in the official cable receiver, or get it from your cable provider, or seek help via Internet forum.</p>

`self.nimConfig.dvbc.scan_networkid`

<h3 id="satconfig-51">Region</h3>

<p>Select your provider and region. If not present in this list you will need to select one of the other &#x27;Service scan types&#x27;.</p>

`self.cableRegions`

<h3 id="satconfig-52">Country</h3>

<p>Select your country. If not available select &#x27;All&#x27;.</p>

`self.terrestrialCountries`

<h3 id="satconfig-53">ATSC provider</h3>

<p>Select your ATSC provider.</p>

`self.nimConfig.atsc.atsc`

<h3 id="satconfig-54">LOF/L</h3>

<p>Enter your low band local oscillator frequency. For more information consult the specifications of your LNB.</p>

`currLnb.lofl`

<h3 id="satconfig-55">LOF/H</h3>

<p>Enter your high band local oscillator frequency. For more information consult the specifications of your LNB.</p>

`currLnb.lofh`

<h3 id="satconfig-56">Threshold</h3>

<p>Enter the frequency at which you LNB switches between low band and high band. For more information consult the specifications of your LNB.</p>

`currLnb.threshold`

<h3 id="satconfig-57">Use LNB 1 User Band</h3>

<p>Select &#x27;Yes&#x27; to use the same User Band channel and frequency as LNB 1. This is intended for multiple satellite positions delivered by the same Unicable system.</p>

`currLnb.unicableUseLnb1UserBand`

<h3 id="satconfig-58">Diction</h3>

<p>Select the protocol used by your SCR device. Choices are &#x27;SCR Unicable&#x27; (Unicable), or &#x27;SCR JESS&#x27; (JESS, also known as Unicable II).</p>

`currLnb.dictionuser`

<h3 id="satconfig-59">Use PIN</h3>

<p>Enable this when the User Band is protected by a PIN in a multi-dwelling Unicable installation.</p>

`currLnb.unicable_use_pin`

<h3 id="satconfig-60">Connected through another tuner</h3>

<p>Select &#x27;Yes&#x27; if this tuner is connected to the SCR device through another tuner, otherwise select &#x27;No&#x27;.</p>

`nimConfig_advanced.unicableconnected`

<h3 id="satconfig-61">Voltage mode</h3>

<p>Select &#x27;Polarization&#x27; if using a &#x27;Universal&#x27; LNB, otherwise consult your LNB specifications.</p>

`Sat.voltage`

<h3 id="satconfig-62">Tone mode</h3>

<p>Select &#x27;Band&#x27; if using a &#x27;Universal&#x27; LNB, otherwise consult your LNB specifications.</p>

`Sat.tonemode`

<h3 id="satconfig-63">Fast DiSEqC</h3>

<p>Select Fast DiSEqC if your aerial system supports it. If you are unsure select &#x27;No&#x27;.</p>

`currLnb.fastDiseqc`

<h3 id="satconfig-64">DiSEqC 1.1 command</h3>

<p>If you are using a DiSEqC uncommitted switch enter the port number required to access the LNB used for this satellite.</p>

`currLnb.uncommittedDiseqcCommand`

<h3 id="satconfig-65">Command order</h3>

<p>This is the order in which DiSEqC commands are sent to the aerial system. The order must correspond exactly with the order the physical devices are arranged along the signal cable (starting from the receiver end).</p>

`currLnb.commandOrder`

<h3 id="satconfig-66">Sequence repeat</h3>

<p>Set sequence repeats if your aerial system requires this. Normally if the aerial system has been configured correctly sequence repeats will not be necessary. If yours does, recheck you have command order set correctly.</p>

`currLnb.sequenceRepeat`

<h3 id="satconfig-67">Use USALS for this sat</h3>

<p>USALS automatically moves a motorized dish to the correct satellite based on the coordinates entered by the user. Without USALS each satellite will need to be setup and saved individually.</p>

`Sat.usals`

<h3 id="satconfig-68">Configuration mode</h3>

<p>Select &#x27;Enabled&#x27; if this tuner has a signal cable connected, otherwise select &#x27;Nothing connected&#x27;.</p>

`self.nimConfig.dvbt.configMode`

<h3 id="satconfig-69">Tuner</h3>

<p>This setting allows the tuner configuration to be a duplication of another configured tuner.</p>

`nimConfig.connectedTo`

<h3 id="satconfig-70">Country</h3>

<p>Select your country. If not available select &#x27;All&#x27;.</p>

`self.cableCountries`

<h3 id="satconfig-71">Enable 5V for active antenna</h3>

<p>Enable this setting if your aerial system needs power.</p>

`self.nimConfig.dvbt.terrestrial_5V`

<h3 id="satconfig-72">Unicable position</h3>

<p>Leave this at 0 to derive the position from the LNB number and device profile. Enter 1 to 64 only for a reprogrammed Unicable device.</p>

`currLnb.unicablePosition`

<h3 id="satconfig-73">Channel</h3>

<p>Select the Unicable channel to be assigned to this tuner. This is a unique value. Be certain that no other device connected to this same Unicable system is allocated to the same Unicable channel.</p>

`satcr`

<h3 id="satconfig-74">Manufacturer</h3>

<p>Select the manufacturer of your SCR device. If the manufacturer is not listed, set &#x27;SCR&#x27; to &#x27;User defined&#x27; and enter the device parameters manually according to its specifications.</p>

`currLnb.unicableMatrixManufacturer`

<h3 id="satconfig-75">Use power measurement</h3>

<p>Detect positioner movement by its current consumption.</p>

`currLnb.powerMeasurement`

<h3 id="satconfig-76">Configuration mode</h3>

<p>Select &#x27;Enabled&#x27; if this tuner has a signal cable connected, otherwise select &#x27;Nothing connected&#x27;.</p>

`self.nimConfig.atsc.configMode`

<h3 id="satconfig-77">Scan EU VHF I band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_EU_VHF_I`

<h3 id="satconfig-78">Scan EU MID band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_EU_MID`

<h3 id="satconfig-79">Scan EU VHF III band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_EU_VHF_III`

<h3 id="satconfig-80">Scan EU UHF IV band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_EU_UHF_IV`

<h3 id="satconfig-81">Scan EU UHF V band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_EU_UHF_V`

<h3 id="satconfig-82">Scan EU SUPER band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_EU_SUPER`

<h3 id="satconfig-83">Scan EU HYPER band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_EU_HYPER`

<h3 id="satconfig-84">Scan US LOW band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_US_LOW`

<h3 id="satconfig-85">Scan US MID band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_US_MID`

<h3 id="satconfig-86">Scan US HIGH band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_US_HIGH`

<h3 id="satconfig-87">Scan US SUPER band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_US_SUPER`

<h3 id="satconfig-88">Scan US HYPER band</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_band_US_HYPER`

<h3 id="satconfig-89">Scan QAM16</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_mod_qam16`

<h3 id="satconfig-90">Scan QAM32</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_mod_qam32`

<h3 id="satconfig-91">Scan QAM64</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_mod_qam64`

<h3 id="satconfig-92">Scan QAM128</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_mod_qam128`

<h3 id="satconfig-93">Scan QAM256</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_mod_qam256`

<h3 id="satconfig-94">Scan 6900 kSym/s</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_sr_6900`

<h3 id="satconfig-95">Scan 6875 kSym/s</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_sr_6875`

<h3 id="satconfig-96">Scan additional SR</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_sr_ext1`

<h3 id="satconfig-97">Scan additional SR</h3>

<p>Include this band, modulation or symbol-rate candidate in cable discovery. Enter additional symbol rates only from provider data.</p>

`self.nimConfig.dvbc.scan_sr_ext2`

<h3 id="satconfig-98">Frequency</h3>

<p>Select the User Band frequency to be assigned to this tuner. This is the frequency the SCR switch or SCR LNB uses to pass the requested transponder to the tuner.</p>

`stcrvco`

<h3 id="satconfig-99">LNB/Switch Bootup time [ms]</h3>

<p>SCR LNB/switch startup delay in milliseconds; follow device specifications.</p>

`currLnb.bootuptimeuser`

<h3 id="satconfig-100">Model</h3>

<p>Select the model number of your Unicable device. If the model number is not listed, set &#x27;SCR&#x27; to &#x27;User defined&#x27; and enter the device parameters manually according to its specifications.</p>

`manufacturer.product`

<h3 id="satconfig-101">Manufacturer</h3>

<p>Select the manufacturer of your SCR device. If the manufacturer is not listed, set &#x27;SCR&#x27; to &#x27;User defined&#x27; and enter the device parameters manually according to its specifications.</p>

`currLnb.unicableLnbManufacturer`

<h3 id="satconfig-102">PIN</h3>

<p>Enter the PIN from 0 to 255 assigned to this User Band by the installer or building operator.</p>

`currLnb.unicable_pin`

<h3 id="satconfig-103">Connected to</h3>

<p>Select the tuner to which the signal cable of the SCR device is connected.</p>

`nimConfig_advanced.unicableconnectedTo`

<h3 id="satconfig-104">Command order</h3>

<p>This is the order in which DiSEqC commands are sent to the aerial system. The order must correspond exactly with the order the physical devices are arranged along the signal cable (starting from the receiver end).</p>

`currLnb.commandOrder1_0`

<h3 id="satconfig-105">DiSEqC 1.1 repeats</h3>

<p>If using multiple uncommitted switches the DiSEqC commands must be sent multiple times. Set to the number of uncommitted switches in the chain minus one.</p>

`currLnb.diseqcRepeats`

<h3 id="satconfig-106">Rotor turning speed</h3>

<p>Select how quickly the dish should move between satellites.</p>

`currLnb.turningSpeed`

<h3 id="satconfig-107">Longitude</h3>

<p>Enter your current longitude. This is the number of degrees you are from zero meridian as a decimal.</p>

`currLnb.longitude`

<h3 id="satconfig-108">Longitude hemisphere</h3>

<p>Enter if you are in the East or West hemisphere.</p>

`currLnb.longitudeOrientation`

<h3 id="satconfig-109">Latitude</h3>

<p>Enter your current latitude. This is the number of degrees you are from the equator as a decimal.</p>

`currLnb.latitude`

<h3 id="satconfig-110">Latitude hemisphere</h3>

<p>Enter if you are North or South of the equator.</p>

`currLnb.latitudeOrientation`

<h3 id="satconfig-111">Stored position</h3>

<p>Enter the number stored in the positioner that corresponds to this satellite.</p>

`Sat.rotorposition`

<h3 id="satconfig-112">H turning speed</h3>

<p>Consult your motor&#x27;s specifications for this information, or leave the default setting.</p>

`currLnb.turningspeedH`

<h3 id="satconfig-113">V turning speed</h3>

<p>Consult your motor&#x27;s specifications for this information, or leave the default setting.</p>

`currLnb.turningspeedV`

<h3 id="satconfig-114">Motor step size</h3>

<p>Consult your motor&#x27;s specifications for this information, or leave the default setting.</p>

`currLnb.tuningstepsize`

<h3 id="satconfig-115">Motor positions</h3>

<p>Consult your motor&#x27;s specifications for this information, or leave the default setting.</p>

`currLnb.rotorPositions`

<h3 id="satconfig-116">Connected to</h3>

<p>Select the tuner upon which this loop through depends.</p>

`nimConfig.connectedTo`

<h3 id="satconfig-117">Frequency scan step size(khz)</h3>

<p>Enter the frequency step size for the tuner to use when searching for cable multiplexes. For more information consult your cable provider&#x27;s documentation.</p>

`self.nimConfig.dvbc.scan_frequency_steps`

<h3 id="satconfig-118">Channel</h3>

<p>Select the User Band channel to be assigned to this tuner. This is an index into the table of frequencies the SCR switch uses to pass the requested transponder to the tuner.</p>

`manufacturer.scr[product_name]`

<h3 id="satconfig-119">Power threshold in mA</h3>

<p>Minimum difference between idle and moving current.</p>

`currLnb.powerThreshold`

<h3 id="satconfig-120">Begin time</h3>

<p>Only move the dish quickly after this hour.</p>

`currLnb.fastTurningBegin`

<h3 id="satconfig-121">End time</h3>

<p>Only move the dish quickly before this hour.</p>

`currLnb.fastTurningEnd`

<h3 id="satconfig-122">Satellite</h3>

<p>Select the satellite you want to configure. Once configured you can select and configure other satellites that will be accessed using this same tuner.</p>

`nimConfig.advanced.sats`

<h3 id="satconfig-123">Frequency</h3>

<p>Select the User Band frequency to be assigned to this tuner. This is the frequency the SCR switch uses to pass the requested transponder to the tuner.</p>

`manufacturer.vco[product_name][manufacturer.scr[product_name].index]`

<h3 id="satconfig-124">Press OK to select satellites</h3>

<p>Selecting this option allows you to configure a group of satellites in one block.</p>

`nimConfig.pressOKtoList`

Further reading: [Unicable](../unicable/), [manual scanning](../manueller-suchlauf/), [ABM](../autobouquetsmaker/) and [DAB+](../dabplus/).

Sources and verification: [Empfang](../quellen/).
