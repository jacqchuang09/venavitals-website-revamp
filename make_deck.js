const pptxgen = require("pptxgenjs");
const pres = new pptxgen();
pres.layout = 'LAYOUT_16x9';
const F = 'Nunito';
const DARK = '1C2B4A';
const MUT = '9CA3AF';

function div(name, url) {
  const s = pres.addSlide();
  s.addText(name, {x:0.5, y:1.8, w:9, h:1.2, fontFace:F, fontSize:36, bold:true, color:DARK, align:'center', valign:'middle', margin:0});
  if(url) s.addText(url, {x:0.5, y:3.1, w:9, h:0.5, fontFace:F, fontSize:13, color:MUT, align:'center', margin:0});
}

function slide(label, richLines, assets) {
  const s = pres.addSlide();
  s.addText(label, {x:0.5, y:0.25, w:9, h:0.28, fontFace:F, fontSize:9, bold:true, color:MUT, margin:0});
  s.addText(richLines, {x:0.5, y:0.62, w:9, h:4.55, fontFace:F, color:DARK, align:'left', valign:'top', margin:0});
  if(assets) s.addText('Assets: ' + assets, {x:0.5, y:5.1, w:9, h:0.35, fontFace:F, fontSize:9, color:MUT, margin:0});
}

// Rich text helpers
const h = (t) => ({text:t, options:{fontSize:18, bold:true, breakLine:true}});
const p = (t) => ({text:t, options:{fontSize:13, breakLine:true}});
const br = () => ({text:' ', options:{fontSize:8, breakLine:true}});
const sm = (t) => ({text:t, options:{fontSize:11, color:MUT, breakLine:true}});

// --- 1. Title ---
{
  const s = pres.addSlide();
  s.addText('Vena Vitals', {x:0.5, y:1.6, w:9, h:1.2, fontFace:F, fontSize:40, bold:true, color:DARK, align:'center', valign:'middle', margin:0});
  s.addText('Website Copy Reference', {x:0.5, y:2.5, w:9, h:0.6, fontFace:F, fontSize:16, color:MUT, align:'center', margin:0});
}

// --- 2. HOME divider ---
div('Home', 'venavitals.com /');

// --- 3. HOME -- Hero ---
slide('HOME', [
  h('Continuous. Noninvasive. Blood pressure.'),
  br(),
  p('Beat-to-beat arterial pressure from a soft sensor the size of a bandage. No cuff, no arterial line.'),
  br(),
  p('Buttons: Request a demo / See the evidence'),
]);

// --- 4. HOME -- Marquee logos ---
slide('HOME', [
  h('Marquee logos'),
  br(),
  p('Y Combinator / National Institutes of Health / MedTech Innovator / EvoNexus / HeartX / National Science Foundation'),
  br(),
  sm('Auto-scrolling strip, logos only, no labels.'),
]);

// --- 5. HOME -- The blood pressure blind spot ---
slide('HOME', [
  h('Two ways to measure blood pressure. Both leave gaps.'),
  br(),
  p('The standard cuff reads every 3 to 5 minutes. Between readings, a patient can lose significant blood volume or undergo a dangerous pressure drop that goes undetected until the next cycle. The alternative, arterial line cannulation, provides continuous, beat-to-beat data, but carries a 10-13% complication rate, a 0.6% infection risk, and a 5 to 20 minute placement time that delays the start of surgery.'),
  br(),
  p('- Cuff readings can miss fast changes between cycles.'),
  p('- Arterial lines take time, training, and procedural risk.'),
]);

// --- 6. HOME -- How VeriTrack works ---
slide('HOME', [
  h('Three steps, plain and simple.'),
  br(),
  p('Apply: The soft sensor is placed over the dorsalis pedis artery on the foot.'),
  p('Sense: A capacitive sensor reads arterial pulse motion beat to beat.'),
  p('Stream: Blood pressure trends stream over Bluetooth to a bedside tablet.'),
  br(),
  p('Button: Explore the technology'),
]);

// --- 7. HOME -- Clinical evidence strip ---
slide('HOME', [
  h('Validated where it matters: the operating room.'),
  br(),
  p('Sudden fluid shifts and hypotensive dips can happen between cuff readings, where they stay invisible. VeriTrack sees every beat. In side-by-side operating room comparisons against the arterial line, it tracked rapid blood pressure changes beat for beat.'),
  br(),
  p('Button: Clinical Evidence'),
  p('Legend: A-line reference / Vena Vitals / 5-hour ENT case'),
]);

// --- 8. HOME -- Built for evaluation ---
slide('HOME', [
  h('Clinical use cases, separate from proof.'),
  br(),
  p('For clinical teams: Review how continuous blood pressure could fit anesthesiology, operating room, and ICU workflows. Link: Clinical use cases'),
  br(),
  p('For sleep medicine research: Explore research directions for continuous blood pressure around sleep-related breathing events. Link: Sleep Medicine'),
]);

// --- 9. HOME -- Clinician perspective ---
slide('HOME', [
  h('Perspective, with approval.'),
  br(),
  p('"A thin bandage-like patch for monitoring blood pressure continuously could revolutionize not just in-hospital monitoring, but outpatient monitoring as well; this is an exciting concept!" -- Joseph Rinehart, MD, Anesthesiology, Clinical Advisor'),
  br(),
  p('"A great advantage to not have to insert invasive monitoring." -- Anesthesiologist, User research'),
  br(),
  p('"Everyone\'s blood pressure is changing constantly, but we\'ve only had two tools to measure it: one is uncomfortable and inaccurate, the other is invasive and risky." -- Ray Liu, CEO'),
]);

// --- 10. HOME -- Final CTA ---
slide('HOME', [
  h('Evaluating continuous blood pressure for your facility?'),
  br(),
  p('Buttons: Request a Demo / Partner With Us'),
]);

// --- 11. TECHNOLOGY divider ---
div('Technology', 'venavitals.com /technology');

// --- 12. TECHNOLOGY -- Hero ---
slide('TECHNOLOGY', [
  h('Arterial-line insight. Bandage form factor.'),
  br(),
  p('A soft capacitive sensor turns subtle arterial motion into a continuous blood pressure waveform.'),
]);

// --- 13. TECHNOLOGY -- How it works ---
slide('TECHNOLOGY', [
  h('Three steps, plain and simple.'),
  br(),
  p('Apply: The soft sensor is placed over the dorsalis pedis artery on the foot.'),
  p('Sense: A capacitive sensor reads arterial pulse motion beat to beat.'),
  p('Stream: Blood pressure trends stream over Bluetooth to a bedside tablet.'),
]);

// --- 14. TECHNOLOGY -- Scroll the signal ---
slide('TECHNOLOGY', [
  h('From skin contact to clinical context.'),
  br(),
  p('A simple workflow with a continuous signal underneath it.'),
  br(),
  p('01 Place: A clinician applies the soft sensor over an arterial site before monitoring begins.'),
  p('02 Sense: A wrinkled capacitive stack reads subtle arterial motion on every beat.'),
  p('03 Stream: Beat-to-beat blood pressure trends move to a bedside tablet for review.'),
  p('04 Review: Teams can see trends and context instead of isolated cuff snapshots.'),
]);

// --- 15. TECHNOLOGY -- Device layers ---
slide('TECHNOLOGY', [
  h('A guided look inside the sensor.'),
  br(),
  p('01 Soft contact layer: Conforms to the body so the sensor can stay aligned over a palpable artery.'),
  p('02 Capacitive sensing stack: Wrinkled-metal layers read subtle pulse motion under the skin.'),
  p('03 Signal electronics: Compact electronics condition the signal before it becomes a BP waveform.'),
  p('04 Wireless stream: Beat-to-beat trends move to a bedside tablet for clinical review.'),
]);

// --- 16. TECHNOLOGY -- The wearable ---
slide('TECHNOLOGY', [
  h('Conforms to the skin.'),
  br(),
  p('The capacitive sensor pairs with an elastic applicator and a small board carrying Bluetooth, a battery, and a motion sensor. The result is a soft wearable that applies in seconds and removes cleanly.'),
]);

// --- 17. TECHNOLOGY -- The signal ---
slide('TECHNOLOGY', [
  h('A continuous arterial waveform, not intermittent numbers.'),
  br(),
  p('Shown beside a simultaneous arterial-line trace, the VeriTrack waveform tracks each beat, including the systolic upstroke and dicrotic notch.'),
]);

// --- 18. TECHNOLOGY -- Workflow fit ---
slide('TECHNOLOGY', [
  h('Applied before the case, out of the surgical field.'),
  br(),
  p('The sensor sits on the foot, where placement is simple and monitoring can continue through the case without occupying the arm or sterile field.'),
]);

// --- 19. TECHNOLOGY -- Specifications ---
slide('TECHNOLOGY', [
  h('At a glance.'),
  br(),
  p('Note: Values should be verified before publishing as final product claims.'),
  br(),
  p('Measurement: Continuous systolic, diastolic, mean arterial pressure, and pulse'),
  p('Output: Beat-to-beat, in real time'),
  p('Placement: Dorsalis pedis artery on the foot, with more sites in development'),
  p('Connectivity: Bluetooth to a bedside tablet'),
  p('Use and wear time: Single-use sensor; wear time and battery to be confirmed'),
]);

// --- 20. TECHNOLOGY -- Roadmap ---
slide('TECHNOLOGY', [
  h('Where we are headed.'),
  br(),
  p('Multi-site placement: Extending beyond the foot to additional measurement sites.'),
  p('Monitor integrations: Bringing the signal into existing patient-monitoring systems.'),
  p('New settings: Critical care is near term. Sleep medicine is a research direction.'),
]);

// --- 21. TECHNOLOGY -- IP and science ---
slide('TECHNOLOGY', [
  h('Patents and peer-reviewed science.'),
  br(),
  p('VeriTrack is built on patented wrinkled-metal sensing and peer-reviewed research from UC Irvine.'),
  br(),
  p('Button: Read the source'),
  br(),
  p('Next step: See the technology in practice.'),
  p('Buttons: Request a demo / Read clinical evidence'),
]);

// --- 22. CLINICAL EVIDENCE divider ---
div('Clinical Evidence', 'venavitals.com /clinical-evidence');

// --- 23. CLINICAL EVIDENCE -- Hero ---
slide('CLINICAL EVIDENCE', [
  h('Validated where it matters: the operating room.'),
  br(),
  p('Sudden fluid shifts and hypotensive dips can happen between cuff readings, where they stay invisible. VeriTrack sees every beat. In side-by-side operating room comparisons against the arterial line, it tracked rapid blood pressure changes beat for beat.'),
  br(),
  p('600+ operating room patients / 6+ study sites / A-line validated vs. radial arterial line / 18-89 age range studied'),
]);

// --- 24. CLINICAL EVIDENCE -- Flagship study ---
slide('CLINICAL EVIDENCE', [
  h('Flagship study placeholder'),
  br(),
  p('Study title, protocol details, and primary results are TBD while the operating-room validation study is ongoing.'),
  br(),
  p('Operating room setting: Current validation materials focus on surgical and anesthesiology use.'),
  p('Radial arterial line: Comparison is against the clinical reference standard for continuous pressure.'),
]);

// --- 25. CLINICAL EVIDENCE -- Waveform comparison ---
slide('CLINICAL EVIDENCE', [
  h('Vena Vitals vs. A-line.'),
  br(),
  p('A stylized view of the same pressure trend tracked by a noninvasive sensor and an arterial line reference.'),
  br(),
  p('Graph: A-Line (mmHg) vs Vena Vitals (mmHg)'),
  p('Patient 270 / Male / 78 years old / BMI 21.98 / ENT case / 5-hour capture'),
  p('Chips: A-line reference / Vena Vitals / 5-hour ENT case'),
  br(),
  p('Link: Source comparison figures'),
]);

// --- 26. CLINICAL EVIDENCE -- Current clinical data ---
slide('CLINICAL EVIDENCE', [
  h('Internal data, pending approval.'),
  br(),
  p('Values shown here are internal clinical-data placeholders and should be published only with citation, regulatory review, and approval.'),
  br(),
  p('Cases (Systolic diff / Diastolic diff in mmHg):'),
  p('California Irvine 310: 2.92 / 1.80'),
  p('University of Vermont 005: 5.11 / 4.15'),
  p('University of Vermont 006: 5.45 / 2.62'),
  p('California Irvine 306: 5.50 / 2.79'),
  p('California Irvine 311 left: 5.68 / 2.34'),
  p('California Irvine 311 right: 5.22 / 2.81'),
]);

// --- 27. CLINICAL EVIDENCE -- How we compare ---
slide('CLINICAL EVIDENCE', [
  h('Continuous signal without a catheter.'),
  br(),
  p('Vena Vitals: Continuous waveform / Skin-worn sensor / Noninvasive'),
  p('A-line: Continuous waveform / Arterial catheter / Invasive'),
  p('Cuff: Intermittent readings / Inflating cuff / Spot checks'),
]);

// --- 28. CLINICAL EVIDENCE -- CTA ---
slide('CLINICAL EVIDENCE', [
  h('Want to run an evaluation at your institution?'),
  br(),
  p('Investigational device. Performance claims require appropriate citations, permissions, and regulatory review before publication.'),
  br(),
  p('Button: Partner with us'),
]);

// --- 29. SOLUTIONS divider ---
div('Solutions', 'venavitals.com /solutions');

// --- 30. SOLUTIONS -- Overview ---
slide('SOLUTIONS', [
  h('Where continuous blood pressure could be used.'),
  br(),
  p('Solutions are the clinical settings and workflows. Clinical Evidence is the proof and data.'),
  br(),
  p('Hospital settings:'),
  p('Operating room / Anesthesiology: Beat-to-beat arterial pressure through a case, with placement away from the surgical field.'),
  p('Critical care / ICU: A near-term direction for continuous pressure visibility with less invasive access.'),
  br(),
  p('Future settings:'),
  p('Home monitoring: A future direction for continuous blood pressure visibility outside the hospital.'),
  p('Sleep Medicine: A research direction for nocturnal blood pressure signals alongside sleep studies.'),
  br(),
  p('Buttons: Request a Demo / See the evidence'),
]);

// --- 31. ANESTHESIOLOGY divider ---
div('Anesthesiology', 'venavitals.com /solutions/anesthesiology');

// --- 32. ANESTHESIOLOGY -- Hero ---
slide('ANESTHESIOLOGY', [
  h('Every beat of every case.'),
  br(),
  p('Continuous, noninvasive arterial pressure for the operating room, applied to the foot and out of your field.'),
  br(),
  p('Button: Request a Demo'),
]);

// --- 33. ANESTHESIOLOGY -- Pain points ---
slide('ANESTHESIOLOGY', [
  h('Why the current choice is difficult'),
  br(),
  p('A-line delay: Placing a line can take unpredictable time, delaying care when teams need continuous pressure now.'),
  p('A-line risk: Arterial lines are invasive and carry procedure risk, so they are not placed in every case.'),
  p('Cuff blind spots: Lag and minutes between readings can hide blood loss, fluid shifts, and rapid pressure changes.'),
]);

// --- 34. ANESTHESIOLOGY -- How VeriTrack fits ---
slide('ANESTHESIOLOGY', [
  h('Apply in pre-op, out of the surgical field'),
  br(),
  p('The sensor sits on the foot, where placement is simple and out of the way. It is applied before the case and monitors continuously through the case.'),
  br(),
  p('In the operating room: From placement on the foot to a continuous trace at the bedside, without occupying the arm or sterile field.'),
  p('Labels: Applied to the foot, out of the field / Continuous pressure at the bedside / Eyes on every beat'),
  br(),
  p('Evidence in this setting: Operating-room validation, motion and artifact comparison, and accuracy snapshots are summarized on Clinical Evidence.'),
  br(),
  p('CTA: Request a demo for your operating room'),
]);

// --- 35. OPERATING ROOM divider ---
div('Operating Room', 'venavitals.com /solutions/operating-room');

// --- 36. OPERATING ROOM -- All content ---
slide('OPERATING ROOM', [
  h('Every beat of every case.'),
  br(),
  p('Continuous, noninvasive arterial blood pressure through the whole case, without an arterial line.'),
  br(),
  p('Intraoperative pressure changes fast:'),
  p('A-line delay: An arterial line can take time to place, and not every case has that time.'),
  p('A-line risk: Arterial lines are invasive and carry procedure risk, so they are not placed in every case.'),
  p('Cuff blind spots: A cuff reads every few minutes, leaving gaps where pressure swings go unseen.'),
  br(),
  p('The soft sensor is placed on the foot, over the dorsalis pedis artery and away from the surgical field. It streams beat-to-beat arterial pressure to the bedside tablet from induction through emergence, then peels off cleanly.'),
  br(),
  p('Studied in more than 600 surgical patients against arterial lines.'),
  p('CTA: See it in your operating room'),
]);

// --- 37. CRITICAL CARE divider ---
div('Critical Care', 'venavitals.com /solutions/critical-care');

// --- 38. CRITICAL CARE -- All content ---
slide('CRITICAL CARE', [
  h('Continuous visibility for critical care.'),
  br(),
  p('A hospital-setting direction for continuous pressure visibility between spot checks and invasive lines.'),
  br(),
  p('Missed events between cuff cycles:'),
  p('Step-down blind spots: Patients outside the highest-acuity rooms may still have meaningful pressure changes between checks.'),
  p('Spot-check reliance: Intermittent cuffs can miss short-lived changes and delay trend recognition.'),
  p('Line burden: Arterial access adds placement time, maintenance, and procedure risk.'),
  br(),
  p('Continuous, noninvasive, fewer lines: A soft sensor on the foot provides continuous arterial pressure without a catheter.'),
  br(),
  p('In development for critical care. VeriTrack has been submitted for Food and Drug Administration 510(k) review and is not yet available for commercial sale.'),
  br(),
  p('CTA: Talk to us about critical care evaluation'),
]);

// --- 39. HOME MONITORING divider ---
div('Home Monitoring', 'venavitals.com /solutions/home-monitoring');

// --- 40. HOME MONITORING -- All content ---
slide('HOME MONITORING', [
  h('Toward continuous pressure outside the hospital.'),
  br(),
  p('A future direction for noninvasive blood pressure trends during everyday life and remote follow-up.'),
  br(),
  p('Blood pressure changes outside clinic visits:'),
  p('Fewer snapshots: Home cuffs can miss variation between measurements and depend on patient technique.'),
  p('Continuous trends: A skin-worn sensor could make longitudinal pressure patterns easier to review.'),
  p('Care-team context: Trend data could support follow-up when paired with clinical review and clear workflows.'),
  br(),
  p('Not a commercial home product today. VeriTrack has been submitted for Food and Drug Administration 510(k) review and is not yet available for commercial sale.'),
  br(),
  p('CTA: Talk to us about future studies'),
]);

// --- 41. SLEEP MEDICINE divider ---
div('Sleep Medicine', 'venavitals.com /solutions/sleep-medicine');

// --- 42. SLEEP MEDICINE -- All content ---
slide('SLEEP MEDICINE', [
  h('Toward continuous nocturnal blood pressure.'),
  br(),
  p('Overnight blood pressure is a promising research direction for continuous, unobtrusive monitoring.'),
  br(),
  p('Nighttime pressure is hard to capture:'),
  p('Sleep disruption: Conventional overnight blood pressure methods can wake patients or change sleep quality.'),
  p('Missed variation: Nighttime pressure patterns can carry meaningful signals that intermittent checks may miss.'),
  p('Research need: Continuous, unobtrusive monitoring could make nocturnal blood pressure easier to study.'),
  br(),
  p('Research direction: Overnight blood pressure and its variation carry meaningful signals, yet conventional methods disrupt sleep. A soft sensor that streams continuously alongside standard sleep measures could make nocturnal pressure easier to study.'),
  br(),
  p('A research direction, not a product. VeriTrack is not offered for sleep or home use today.'),
  br(),
  p('CTA: Collaborate on research'),
]);

// --- 43. PARTNER WITH US divider ---
div('Partner With Us', 'venavitals.com /partner-with-us');

// --- 44. PARTNER -- Hero ---
slide('PARTNER WITH US', [
  h('Bring continuous, noninvasive blood pressure to your facility.'),
  br(),
  p('Evaluate VeriTrack in your operating room or ICU through a structured pilot.'),
  br(),
  p('Built for clinical leaders, operating room teams, critical care teams, supply chain, and value-analysis committees.'),
]);

// --- 45. PARTNER -- Build the case ---
slide('PARTNER WITH US', [
  h('Build the case for your site.'),
  br(),
  p('Economic case: Frame the value around missed hypotension, arterial-line procedure burden, nursing workflow, and consumable use. Add literature citations where available.'),
  p('Workflow case: Show how setup, placement confirmation, calibration, and monitoring fit into perioperative workflow without replacing the whole monitor stack.'),
  p('Internal assets: Give value-analysis committees a spec sheet, evidence summary, and regulatory status language.'),
]);

// --- 46. PARTNER -- Evaluation program ---
slide('PARTNER WITH US', [
  h('A pilot should be concrete enough for hospital teams to understand timeline, support, data outputs, and what success looks like.'),
  br(),
  p('01 Scope: Confirm setting, patient population, endpoints, and review pathway.'),
  p('02 Prepare: Train clinical users, confirm data flow, and align review board or evaluation needs.'),
  p('03 Run: Support placement workflow, data capture, and weekly check-ins.'),
  p('04 Review: Return summary data, workflow findings, and next-step recommendations.'),
]);

// --- 47. PARTNER -- Who we work with ---
slide('PARTNER WITH US', [
  h('Studied with clinical teams.'),
  br(),
  p('University of California, Irvine / University of Vermont / Hoag / University of California San Francisco / Henry Ford / Arkansas Heart'),
]);

// --- 48. PARTNER -- Common pilot questions ---
slide('PARTNER WITH US', [
  h('Common pilot questions.'),
  br(),
  p('Regulatory status: VeriTrack is an investigational device. Public claims should follow approved 510(k) pending language.'),
  p('Integration: Bluetooth to tablet is shown in the deck. Bedside monitor, health record, and dashboard integration should be framed as roadmap unless confirmed.'),
  p('Training: Evaluation planning should include placement, signal confirmation, calibration, and troubleshooting workflow.'),
  p('Consumables: Clarify reusable and single-use components once product configuration is finalized.'),
  p('Data and privacy: Pilot planning should define data export, storage, access, and institutional privacy review.'),
]);

// --- 49. PARTNER -- Demo form ---
slide('PARTNER WITH US', [
  h('Start an evaluation conversation.'),
  br(),
  p('Fields: Name / Organization / Role / Email / Phone (Optional) / Message'),
  br(),
  p('Button: Send request'),
]);

// --- 50. ABOUT divider ---
div('About', 'venavitals.com /about');

// --- 51. ABOUT -- Hero and story ---
slide('ABOUT', [
  h('Born at UCI. Built for clinical care.'),
  br(),
  p('Vena Vitals is building a soft, skin-worn sensor for continuous, cuffless blood pressure monitoring.'),
  br(),
  p('From a university lab to the operating room:'),
  p("Vena Vitals began at UC Irvine, where Michelle Khine's lab developed a soft, stretchable material that captures highly sensitive data while moving like skin. Founded in 2019, the team set out to close the gap between the cuff and the arterial line, and has since tested its sensor in operating rooms across the country."),
  br(),
  p('Timeline: UCI/Lab origin / 2019 Founded / Irvine California / 600+ patients studied / 510(k) submitted / Pilots next phase'),
]);

// --- 52. ABOUT -- Founders ---
slide('ABOUT', [
  h('The team behind VeriTrack'),
  br(),
  p('Ray Liu: CEO and co-founder. Commercial and medtech background across hospital sales, FDA pathway work, and healthcare operations.'),
  br(),
  p("Michelle Khine: Co-founder. UC Irvine biomedical engineering professor whose lab developed the soft, stretchable sensing foundation."),
  br(),
  p('Josh Kim: Co-founder and CTO. Developed the underlying technology during doctoral research and authored foundational papers.'),
], 'headshots/ray.jpg / headshots/michelle.png / headshots/josh.jpeg');

// --- 53. ABOUT -- Team and backers ---
slide('ABOUT', [
  h('Engineers and clinicians'),
  br(),
  p('Clinical advisory board: Named clinical advisors guiding the work, including anesthesiology leaders. Names and institutions to confirm.'),
  p('The team: Engineers, clinicians, and operators with backgrounds spanning patient monitoring and digital health. Full team to confirm.'),
  br(),
  p('Supported by clinical and startup programs:'),
  p('Y Combinator / MedTech Innovator / EvoNexus / NIH / NSF / Morado Ventures'),
]);

// --- 54. ABOUT -- Careers ---
slide('ABOUT', [
  h('Work with us'),
  br(),
  p('We are a multidisciplinary team building clinical-grade wearables. If that is your kind of problem, we would like to meet you.'),
  br(),
  p('Buttons: See open roles / Request a demo'),
]);

// --- 55. NEWS divider ---
div('News', 'venavitals.com /news');

// --- 56. NEWS -- All content ---
slide('NEWS', [
  h('Company updates and press resources.'),
  br(),
  p('A simple place for announcements, evidence updates, and approved media materials.'),
  br(),
  p('Announcements, evidence, and research notes:'),
  p('Company: Use this space for funding, pilot, regulatory, or milestone announcements once approved.'),
  p('Evidence: Link to abstracts, posters, and evidence summaries when publication permissions are confirmed.'),
  p('Research: Keep research updates distinct from cleared product claims.'),
  br(),
  p('Approved assets for media and partners:'),
  p('Boilerplate: Short company description and approved regulatory language.'),
  p('Logos and media: Approved logos, product visuals, and leadership photos.'),
  p('Press contact: A clear path for interviews, announcements, and media questions.'),
  br(),
  p('Need approved material? Contact press: INFO@VENAVITALS.COM'),
]);

// --- 57. CONTACT divider ---
div('Contact', 'venavitals.com /contact');

// --- 58. CONTACT -- All content ---
slide('CONTACT', [
  h('See VeriTrack in a clinical workflow.'),
  br(),
  p('Tell us about your setting and a member of the team will follow up with the right evidence and evaluation materials.'),
  br(),
  p('For: Operating room and anesthesia teams / Critical care and hospital pilots / Evidence and regulatory conversations'),
  br(),
  p('Form: Name / Organization / Role / Work email / Phone (Optional) / Message'),
  p('Button: Send request'),
  br(),
  p('What happens next: A focused follow-up, not a sales maze.'),
  p('We aim to reply within one business day.'),
  p('Email: INFO@VENAVITALS.COM'),
]);

// --- 59. PRODUCT divider ---
div('Product', 'venavitals.com /product');

// --- 60. PRODUCT -- All content ---
slide('PRODUCT', [
  h('Wearable blood pressure monitoring system.'),
  br(),
  p('Vena includes the wearable sensor, patient app, and clinician-facing tools needed to collect and review continuous blood pressure data.'),
  br(),
  p('01 Sensor: Soft sensor worn on the wrist or foot. Designed for multi-day monitoring with wireless data transfer.'),
  p('02 Patient app: Shows systolic, diastolic, mean arterial pressure, and pulse trends, with alerts and history.'),
  p('03 Clinician monitor: Supports review on a monitor or dashboard, with data exports for clinical studies and treatment follow-up.'),
  br(),
  p('Button: Talk to our team'),
]);

// --- 61. FAQ divider ---
div('FAQ', 'venavitals.com /faq');

// --- 62. FAQ -- Q1 to Q3 ---
slide('FAQ', [
  h('Common questions.'),
  br(),
  p('Q: How does Vena measure blood pressure without a cuff?'),
  p('A: A soft sensor is worn over an arterial site, such as the wrist or foot. The sensor detects pulse-related pressure changes and converts them into systolic, diastolic, and mean arterial pressure trends.'),
  br(),
  p('Q: Is it accurate compared to invasive monitoring?'),
  p('A: In validation studies, Vena has shown mean error under 3 mmHg compared with radial arterial line measurements. Full study data are available on request.'),
  br(),
  p('Q: Where is the sensor worn?'),
  p('A: Either the inner wrist (over the radial artery) or the top of the foot. Both sites yield a clean beat-to-beat waveform; clinicians choose based on patient and workflow.'),
]);

// --- 63. FAQ -- Q4 to Q6 ---
slide('FAQ', [
  h('Common questions (continued).'),
  br(),
  p('Q: How does the data reach the chart?'),
  p('A: The sensor sends data wirelessly to a phone or bedside gateway. From there, readings can be forwarded to a monitor, dashboard, health record workflow, or research database.'),
  br(),
  p('Q: What is the regulatory status?'),
  p('A: Vena is an investigational device. Performance claims reference internal validation and ongoing studies. Commercial availability is subject to regulatory clearance in each geography.'),
  br(),
  p('Q: Can patients wear it at home?'),
  p('A: Yes. Vena is designed for hospital, ambulatory, and home use, including post-procedure follow-up, medication titration, and decentralized clinical trials.'),
]);

pres.writeFile({fileName: 'Vena_Vitals_Website_Copy.pptx'}).then(() => {
  console.log('Done: Vena_Vitals_Website_Copy.pptx written');
}).catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
