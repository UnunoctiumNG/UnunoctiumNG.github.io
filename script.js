const Q1A = ["Plastic, steel, or copper", "Iron, copper, or plastic", "Tin, copper, or plastic", "Steel, plastic, or iron"]
const Q2A = ["The piping, tubing or fittings to be used are cleaned, inspected and tested", "2", "3", "1"]
const Q3A = ["ASTM A53/A53 M or ASTM A106", "ASTM A65/A65 T or ASTM M102", "ULC 34001/CSA 5.12", "B.149.3-15 or CSA 6.5.1"]
const Q4A = ["ANSI/ASME B16.3 or certified to ANSI LC-4/CSA 6.32", "ANSI/AMSE D11.4", "ALC 452/ANSI 5.1 and ULC 3155J", "CSA 6.24.1 or CSA 7.1.1"]
const Q5A = ["125 psig (860 kPa)", "100 psig (690 kPa)", "75 psig (520 kPa)", "150 psig (1034 kPa)"]
const Q6A = ["ASTM B837", "ASTM G102", "ASTM M101", "ASTM B88"]
const Q7A = ["ASTM B88", "ASTM B837", "ASTM M101", "ASTM G102"]
const Q8A = ["ASTM B88", "ASTM B837", "ASTM G102", "ASTM M101"]
const Q9A = ["Externally machined", "Larger than NPS 1/2", "Bent at the fault line", "Smaller than NPS 1/2"]
const Q10A = ["125 psig (860 kPa)", "150 psig (1034 kPa)", "75 psig (520 kPa)", "100 psig (690 kPa)"]
const Q11A = ["Extruded polyethylene or PVC resin", "Painting or coating", "Polyvinyl carbonate", "Ethylene glycol solution"]
const Q12A = ["Type K copper tubing placed underground, does not need to be coated with any material during the time of manufacture.", "Extruded polyethylene or PVC resin", "Polyvinyl carbonate", "A sleeve"]
const Q13A = ["Seamless copper", "Seamless iron", "Seamed copper", "Seamed iron"]
const Q14A = ["CSA CAN1-8.3 or CSA CAN/CGA 8.1", "CSA Standard A104-T", "ASTM M51A", "CSA CAN2-10 and CSA 6.11.25"]
const Q15A = ["CAN/CSA-W117.2", "CSA 8.2.9 and CSA 5.12.3", "CSA B.145.1-15", "ASTM 150-1.2"]
const Q16A = ["Conforms to a nationally recognized standard or to a test report of a nationally recognized certification organization.", "Capable of withstanding pressures up to and including 600 psig", "Is in good shape and working order", "Externally machined or mechanically joined"]
const Q17A = ["CSA B137.4", "CAN/CSA-W117.2", "ASTM 150-1.2", "BSA C137-4"]
const Q18A = ["CSA B137.4 or CSA B137.4.1", "BSA C137-4", "CSA 8.2.9 and CSA 5.12.3", "ASTM M51A"]
const Q19A = ["Plastic piping", "Fittings", "Piping of any kind", "A storage tank"]
const Q20A = ["Outdoor underground service", "Indoor underground service", "Outdoor above ground service", "Indoor above ground service"]
const Q21A = ["10 feet", "12 feet", "8 feet", "20 feet"]
const Q22A = ["86 F (30 C)", "50 F (10 C)", "100 F (38 C)", "212 F (100 C)"]
const Q23A = ["122 F (50 C)", "67 F (19 C)", "150 F (65 C)", "90 F (32 C)"]
const Q24A = ["The plastic piping or tubing is not subject to external loading stresses created by other piping, appliances, or equipment.", "The plastic piping or tubing is not subject to excessive usage", "The plastic piping or tubing must be inspected monthly for leaks or damage", "The plastic piping or tubing must be concealed"]
const Q25A = ["ANSI/LC 1/CSA 6.26", "CAS 5.12 or ANSI/T1-A", "ANSI/CC2", "CSA 8.2.9 and CSA 5.12.3"]
const Q26A = ["CSA publication CGA Certification Laboratory Requirement LAB-009", "CSA  publication GCA Certification Testing Requirement TEST-015", "CSA 501-A", "ANSI LC 2/CSA 1.5.2"]
const Q27A = ["No", "Only if it does not exceed a nominal outside diameter (OD) of NPS 1/2", "Only if it complies with Clause 6.2.5", "Yes"]
const Q28A = ["Volume and pressure at that point of use", "The first drop in pressure", "The first and last appliance served", "The individuals who require them"]
const Q29A = ["1.0 in w.c", "2.0 in w.c", "1.5 in w.c", "0.5 in w.c"]
const Q30A = ["The appliance and either the termination of the utility installation or the last-stage regulator", "The appliance's first-stage regulator and the termination of the last-stage utility regulator.", "The last-stage terminator and the appliance utility installation", "The termination of the utility installation and the first-stage regulator"]
const Q31A = ["The use of the tables found in Annex A, or by method of calculation outlined in Annex A", "The use of the Tables found in Annex H, or by use of good engineering practices", "The use of tables 6.1 and 6.2", "The use of the tables founds in Annex B, or by method of calculation outlined in Annex B"]
const Q32A = ["Ensure that the appliance will not be overpressured under conditions of no flow", "All of these", "Ensure that the pressure does not drop below 14 in w.c. (3.5 kPa) at any time during operation", "Ensure that each appliance is securely fastened at all times"]
const Q33A = ["Matches downstream load requirements", "Exceeds upstream load requirements", "Exceeds downstream load requirements", "Matches upstream load requirements"]
const Q34A = ["By method of calculation outlined in Annex B", "By method of calculation outlined in Annex A", "By tables 6.1 and 6.2", "By use of the tables found in Annex G or Annex H"]
const Q35A = ["0.60", "1.00", "0.45", "0.75"]
const Q36A = ["1.52", "1.21", "2.00", "0.60"]
const Q37A = ["The resistance of bends, fittings and valves", "The appropriate nominal pipe size", "The length of joints and branch lines", "The pressure added from bends, fittings and valves"]
const Q38A = ["NPS 1/2", "NPS 3/8", "NPS 1", "NPS 1/4"]
const Q39A = ["25 ft in length", "20 ft in length", "5 ft in length", "10 ft in length"]
const Q40A = ["NPS 1/2", "NPS 3/8", "NPS 2", "NPS 2 1/2"]
const Q41A = ["Include an allowance for known future extensions", "Be less than 14 in w.c.", "Be less than 150,00 cubic feet", "Be calculated from the tables found in Annex A and Annex B"]
const Q42A = ["The appliance manufacturer", "The rating plate of a similar appliance", "There is no acceptable alternative", "The rating plate of an appliance from the same manufacturer"]
const Q43A = ["Authority having jurisdiction", "Guidelines set forth by the CAS", "Occupants", "Manufacturer of the piping or tubing"]
const Q44A = ["The appliance rating plate", "The appliance's consumption rate", "The rating plate of a similar appliance", "The rating plate of an appliance from the same manufacturer"]
const Q45A = ["A pressure regulator", "A quick-disconnect device", "A volume regulator", "A cap or plug"]
const Q46A = ["Bends, fittings and valves", "Temperature", "Weight and volume", "Expansion, contraction, vibration and/or jarring"]
const Q47A = ["Clause 6.3", "Clause 6.4.1", "Clause 6.2.3", "Clause 6.5.4"]
const Q48A = ["24 inches", "20 inches", "15 inches", "12 inches"]
const Q49A = ["Inspected and tested in accordance with Clause 6.22 in their final position prior to being concealed", "Recovered without damaging the structural integrity of the fittings or joints", "Tested in accordance with Clause 6.23 in their position after being concealed", "Found by occupants"]
const Q50A = ["All answers listed", "In a stairwell other than a stairwell within a dwelling unit unless it is totally enclosed by a chase consisting of material that has the same fire-resistance rating as that required for the stairwell", "in a heating or ventilation plenum, duct, or shaft, except as permitted in Clause 6.7.6", "in a chimney, flue, elevator shaft, dumbwaiter, or chute"]
const Q51A = ["Corrosive chemical is used", "Basic solution is used", "Backhoe is used", "All of these"]
const Q52A = ["Encasing the piping or tubing in ducts so that there is free air space around the pipe or tube. Such a duct shall be ventilated.", "Encasing the piping or tubing in metallic sleeves to maintain the structural integrity of the pipe or tube.", "Any practice authorized by the head of the body installing the piping or tubing.", "Encasing the piping or tubing in extruded polyethylene, preventing any free air space around the pipe or tube."]
const Q53A = ["1 inch in diameter", "1.2 inches in diameter", "0.5 inches in diameter", "2 inches in diameter"]
const Q54A = ["Clause 6.7.6", "Clause 6.15.6", "Clause 6.23.5", "Clause 6.4.1"]
const Q55A = ["Cutting burrs, threading burrs, scale and defects", "Threads, seams, scale and defects", "Scratches, cutting burrs, and threads", "Defects, seams, and scale"]
const Q56A = ["Reamed", "Adjustable", "Closed", "Bent"]
const Q57A = ["Other piping or tubing", "Clevis hangers", "Wall clamps", "Self-nailing hangers"]
const Q58A = ["That required for the purpose for which it is intended", "What is required to maintain adequate flow for a minimum of 15 years", "100 psig", "150 psig"]
const Q59A = ["A back check valve, or other suitable equipment", "A lubricated joint or valve", "A quick-disconnect device", "A plug or cap"]
const Q60A = ["A low-pressure indicator", "A high-pressure indicator", "A quick-disconnect device", "Yellow banding with a width of no less than 1 inch"]
const Q61A = ["Clause 6.8.8", "Clause 6.5.7", "Clause 6.2.5", "Clause 6.8.9"]
const Q62A = ["The branch line does not exceed 50% of the pipe diameter of the gas supply header, and in no case, be less than NPS 3/4", "All of these", "The branch line has less than 2 other appliances connected to it", "The branch line can handle an additional appliance who's gas consumption is less than 50% of all other appliances in the line"]
const Q63A = ["Galvanic action between the piping or tubing and the supports", "All of these", "Strain on the building", "All movement or vibration"]
const Q64A = ["All of these", "Welded", "Flanged", "Threaded"]
const Q65A = ["NPS 2 1/2", "NPS 1/2", "NPS 1", "NPS 1 3/4"]
const Q66A = ["Registered under the applicable provincial or territorial legislation", "Trained by the TSSA in proper welding procedures", "Equipped with the appropriate safety outfitting", "Accredited by the TSSA as a fully licensed and bonded welder"]
const Q67A = ["Clause 7.10.2 of CSA Z662", "Clause 7.12.1 of CSA Z662", "Clause 6.21.3 of CAS-510", "Clause 6.12.1 of CSA A662"]
const Q68A = ["Tapered", "Bent", "Capped", "Plugged"]
const Q69A = ["Male threads of a metal pipe", "Female thread of a metal pipe", "Female threads of a plastic pipe", "Male threads of a plastic pipe"]
const Q70A = ["Neoprene or other similar material", "Gastec hypo-polyethylene", "Ethylene glycol or other similar materials", "Extruded polyvinyl uretherene"]
const Q71A = ["The service conditions to which it can be subjected", "Repeated, heavy impacts", "Pressures greater than 50 psig", "Temperatures greater than 350 F"]
const Q72A = ["A press-connect fitting", "A quick-disconnect fitting", "A lubricated fitting", "A manual-connect fitting"]
const Q73A = ["Steel", "Malleable Iron", "Copper", "Tin"]
const Q74A = ["Heat fusion, electro fusion, or mechanical methods", "A press-connect device", "Threaded rods", "Pressed fusion or a certified joint sealant"]
const Q75A = ["The same size as the piping which supplies it", "Any size greater than the piping which supplies it", "Half the size as the piping which supplies it", "Twice the size as the piping which supplies it"]
const Q76A = ["Where approved", "If concealed", "Where it cannot be tampered with", "Where it will anchor the appliance"]
const Q77A = ["Secured in place (non-removable)", "Removable if required", "Not operating at a temperature exceeding 10 psig", "Not operating at a pressure exceeding 7 in w.c."]
const Q78A = ["Indoors, in a residential building", "Outdoors", "Gas driven or powered", "No longer functional"]
const Q79A = ["ANSI Z21.90/CSA 6.24", "CAS 5.12.1 and CSA 6.24", "CAS 5.12.1", "ANSI MA6/CSA 1.21"]
const Q80A = ["ANSI Z21.41/CSA 6.9", "ULC 3700U or ULC 4700U", "ANSI MA6/CSA 1.21", "CAS 5.12.1 and CSA 6.24"]
const Q81A = ["No undue strain on the connection", "The connection is easily removable, should the need arise", "An excess of piping", "Room for an additional appliance"]
const Q82A = ["a plugged valve", "a vice or clamp", "a lubricated joint", "a sealed gasket"]
const Q83A = ["1 inch", "2 inches", "3 inches", "0.5 inches"]
const Q84A = ["As close as practicable", "As far as physically possible", "As far as practicable", "As close as physically possible"]
const Q85A = ["The final drop serving an appliance", "Each drop after the first drop serving an appliance", "Any drop where condensation may form", "The first drop serving an appliance"]
const Q86A = ["A range, clothes dryer, gas log, or room heater", "A refrigerator, cooler, range or chiller", "A gas log, room heater, grill, or lighting device", "A range, boiler, fire place, or refrigerator"]
const Q87A = ["NPS 2", "NPS 7", "NPS 1/2", "NPS 3-1/2"]
const Q88A = ["Cleaning and emptying", "Back valve drafts or ignition", "Air flow", "Monthly inspection"]
const Q89A = ["Capped", "Concealed", "Extendable", "Reamed"]
const Q90A = ["Condensation", "Dirt or debris", "Excess air", "Undesirable gasses"]
const Q91A = ["Replaced", "Repaired", "Inspected", "Patched"]
const Q92A = ["Nested", "Used where temperatures exceed 50 F", "Made of any metal", "Used in a piping system"]
const Q93A = ["Not be used", "Be reamed and fitted", "Not be used, with the exception of the guidelines found in Clause 6.4.1", "Be used when appropriate"]
const Q94A = ["A swing joint", "All of these", "A combination of fittings", "A union"]
const Q95A = ["Low voltage", "Concealed", "Functioning", "High voltage"]
const Q96A = ["A street elbow, close nipple, or street tee", "A branch line", "A nipple, coupling, or tee", "A joint, sealant, or fitting"]
const Q97A = ["NPS 1/2", "NPS 2 1/2", "NPS 3/8", "NPS 1"]
const Q98A = ["Welding", "Finishing", "Glazing", "Brazing"]
const Q99A = ["Brazing", "Finishing", "Glazing", "Welding"]
const Q100A = ["24 inches", "20 inches", "15 inches", "10 inches"]
const Q101A = ["A sag in the piping or tubing", "Function of the piping or tubing", "Inspection of the piping or tubing", "All movement of the piping or tubing"]
const Q102A = ["Any material that can damage the piping or tubing", "Exposure to temperatures exceeding 50 F", "Exposure to direct sunlight", "Carbon or carbon-like substances"]
const Q103A = ["A foundation, wall or building.", "A recreational area", "A street", "A driveway"]
const Q104A = ["The authority having jurisdiction", "CSA 5A/ASTM 15M", "Clause 6.7.1", "The head of the company installing the piping or tubing"]
const Q105A = ["A watertight seal", "A lubricated plug or joint", "A gas valve or suspension valve", "A metal bracket or equivalent support"]
const Q106A = ["A sleeve", "A guardrail or post", "A neoprene coating", "A copper sheath"]
const Q107A = ["Paving extends 25 ft or more from the building", "Paving extends 10 feet or less from the building", "Paving is absent", "Paving extends 15 ft or more from the building"]
const Q108A = ["Plastic", "Tin", "Iron", "Neoprene"]
const Q109A = ["A shut-off valve situated above ground", "A quick-disconnect device situated below ground", "A shut-off valve situated below ground", "A quick-disconnect device situated above ground"]
const Q110A = ["Plastic piping or tubing", "Schedule 40 piping", "Schedule 80 piping", "Corrugated Stainless Steel Tubing (CSST)"]
const Q111A = ["Painting or coating", "A metallic sheath", "Backfill", "A sleeve"]
const Q112A = ["Corrosion", "Moisture", "Temperatures less than 50 F", "Temperatures exceeding 50 F"]
const Q113A = ["Expansion, contraction, jarring, vibration, and settling", "Corrosive materials", "Pressures in excess of 25 psi", "Temperatures exceeding 300 F"]
const Q114A = ["1.75 inches", "1.00 inches", "1.25 inches", "1.50 inches"]
const Q115A = ["Appliance doors or covers", "Gas flow", "Occupants", "Air flow"]
const Q116A = ["Galvanic corrosion", "Abrasion", "Undue strain", "Transfer of heat"]
const Q117A = ["Damage and galvanic action", "Corrosive materials and expansion/contraction", "Galvanic action and direct sunlight", "Damage and direct sunlight"]
const Q118A = ["Sleeved", "Welded", "Painted", "Coated"]
const Q119A = ["Excessive heat and harmful chemicals", "All of these", "Excessive inspection", "Excessive motion and vibration"]
const Q120A = ["Adequately supported", "Cut, reamed and threaded", "Water sealed", "Double wrapped"]
const Q121A = ["Direct sunlight", "Ambient temperatures", "Moisture", "Vibration"]
const Q122A = ["The manufacturer's certified installation instructions", "The guidelines set forth by the company installing the tubing", "The guidelines set forth by the TSSA in Volume 2.2", "CAS 51A/ASTM 228"]
const Q123A = ["Posts or guardrails", "Copper fencing", "Metallic sheaths", "Sleeves"]
const Q124A = ["42 inches", "12 inches", "55 inches", "30 inches"]
const Q125A = ["36 inches", "90 inches", "10 inches", "45 inches"]
const Q126A = ["30 inches", "60 inches", "40 inches", "50 inches"]
const Q127A = ["1 inch", "2 inches", "4 inches", "3 inches"]
const Q128A = ["14 in w.c.", "20 in w.c.", "9 in w.c.", "7 in w.c."]
const Q129A = ["6 ft", "5 ft", "10 ft", "12 ft"]
const Q130A = ["Two or more gas meters", "Three or more gas meters", "Three or more release valves", "Two or more pressure regulators"]
const Q131A = ["Its certified rating range", "160 F and 12 psig", "125 F and 12 psig", "The appliance plate rating"]
const Q132A = ["Valve train", "Release clip", "Corroded notch", "Appending joint"]
const Q133A = ["The tubing is 1 inch OD or larger", "The tubing is exactly 3 inches OD", "The tubing is 1.5 inches OD or smaller", "The tubing is 2 inches OD or larger"]
const Q134A = ["Installed to provide protection from damage", "Installed to provide structural security", "Installed to provide insulation", "Installed to provide shock resistance"]
const Q135A = ["Valve seat", "Valve notch", "Valve lift", "Valve release"]
const Q136A = ["The point of entry to the adjoining building", "The midway point and the point of exit in the adjoined building", "The midway point", "The point of exit in the adjoined building"]
const Q137A = ["Propane", "None of these", "Natural Gas", "Pressure"]
const Q138A = ["Readily accessible", "Readily attachable", "Readily removable", "Readily findable"]
const Q139A = ["Capped", "Tied", "Wrapped", "Marked"]
const Q140A = ["Shut off the gas supply", "Reduce the gas supply", "Reverse the gas supply", "Increase the gas supply"]
const Q141A = ["Clause 7.23.3", "Clause 7.13.2", "Clause 7.24.1", "Clause 7.25.2"]
const Q142A = ["Mobile during operation, is portable, or requires isolation from vibration", "Stationary during operation, required isolation from vibration, and is not portable", "Not portable, and does not require isolation from vibration", "Currently in use"]
const Q143A = ["10 ft", "12 ft", "20 ft", "15 ft"]
const Q144A = ["Not be permitted", "Be used no more often than once per 10 ft", "Be used sparingly", "Always be used"]
const Q145A = ["At a minimum", "Impossible", "Constant", "At a maximum"]
const Q146A = ["The gas hose must be replaced immediately", "The gas hose must be repaired immediately", "The gas hose must not be used again after operation is complete", "The gas hose must be purged"]
const Q147A = ["Concealed location", "Location with exposure to direct sunlight", "Industrial setting", "Care setting"]
const Q148A = ["ULC C536", "ASTM 512", "UAC 293A", "CAS 6251"]
const Q149A = ["The shut-off valves on the gas hose", "The gas hose and last bend", "The gas hose and first bend", "Any two points before the shut-off valve"]
const Q150A = ["An appliance located within a building", "A mobile unit", "Another propane tank", "An appliance located within a residential home"]
const Q151A = ["ANSI Z20.51/CSA 2.5", "ANSI 910A", "CSA 5.12 and ASTM 162J", "ANSI 50S.1"]
const Q152A = ["A wall, floor, ceiling or partition", "An area with an ambient temperature exceeding 67 F", "An area that experiences direct sunlight", "An industrial setting"]
const Q153A = ["ANSI Z21.101/CSA 8.5", "UALC Regulation H624", "CAS 9.1 and ASTM 102A", "ANSI Z51.20/CAS 9.1"]
const Q154A = ["2 ft", "5 inches", "10 inches", "3ft"]
const Q155A = ["ANSI Z21.75/CSA 6.27", "ANSI Z20.51/CSA 2.5", "UALC Regulation H624", "ANSI Z51.20/CAS 9.1"]
const Q156A = ["Isolated", "Inspected", "Removable", "Repairable"]
const Q157A = ["20 ft", "23 ft", "10 ft", "15 ft"]
const Q158A = ["Clause 6.22.2", "Clause 6.16.1", "Clause 6.18.2", "Clause 6.20.5"]
const Q159A = ["Purging the gas to the outdoors in accordance with Clause 6.23.7", "Purging the gas to the outdoors in accordance with Clause 6.25.2", "Purging the gas indoors in accordance with Clause 6.23.8", "Purging the gas indoors in accordance with Clause 6.23.5"]
const Q160A = ["NPS 4", "NPS 1", "NPS 2", "NPS 3"]
const Q161A = ["Annex H", "Annex J", "Annex A", "Annex B"]
const Q162A = ["Constant attendance", "A standing position", "A prone position", "A safe location"]
const Q163A = ["10 ft", "8 ft", "12 ft", "15 ft"]
const Q164A = ["Smoking", "Inspecting", "Standing", "Reading"]
const Q165A = ["All piping and tubing systems and hose have been purged", "All piping and tubing systems have been cleaned", "All piping and tubing systems have been disassembled", "All piping and tubing systems have been inspected"]
const Q166A = ["NPS 1", "NPS 4", "NPS 3", "NPS 2"]
const Q167A = ["Piping or tubing", "A removable valve", "A stationary valve", "A quick-disconnect device"]

var displayQuestions = false

function compile() {
  displayQuestions = true;
  let theQuestions = [
    {
      question: "A gas piping or tubing system shall be of which of the following materials?",
      answers: {
        `<label class="ans" ${[Q1A[0]]}></label>`: "",
        [Q1A[1]]: "",
        [Q1A[2]]: "",
        [Q1A[3]]: ""
      },
      correctAnswer: "Plastic, steel, or copper"
    },
    {
      question: "If removed from an existing gas installation that did not use natural gas, the piping, tubing and fittings can be reused with natural gas if they have been ascertained to be equivalent to new material and: ",
      answers: {
        [Q2A[0]]: "",
        [Q2A[1]]: "",
        [Q2A[2]]: "",
        [Q2A[3]]: ""
      },
      correctAnswer: "The piping, tubing or fittings to be used are cleaned, inspected and tested"
    },
    {
      question: "Piping shall comply with which of the following standards? ",
      answers: {
        [Q3A[0]]: "",
        [Q3A[1]]: "",
        [Q3A[2]]: "",
        [Q3A[3]]: ""
      },
      correctAnswer: "ASTM A53/A53 M or ASTM A106"
    },
    {
      question: "A malleable iron fitting is used with a stretch of steel pipe. Which standard must this fitting comply with? ",
      answers: {
        [Q4A[0]]: "",
        [Q4A[1]]: "",
        [Q4A[2]]: "",
        [Q4A[3]]: ""
      },
      correctAnswer: "ANSI/ASME B16.3 or certified to ANSI LC-4/CSA 6.32"
    },
    {
      question: "Natural gas or propane vapour phase piping that is at least standard weight, can operate to pressures up to and including: ",
      answers: {
        [Q5A[0]]: "",
        [Q5A[1]]: "",
        [Q5A[2]]: "",
        [Q5A[3]]: ""
      },
      correctAnswer: "125 psig (860 kPa)"
    },
    {
      question: "A stretch of Type G copper tubing used in a gas system, must comply with which of the following standards? ",
      answers: {
        [Q6A[0]]: "",
        [Q6A[1]]: "",
        [Q6A[2]]: "",
        [Q6A[3]]: ""
      },
      correctAnswer: "ASTM B837"
    },
    {
      question: "A stretch of Type K copper tubing used in a gas system, must comply with which of the following standards? ",
      answers: {
        [Q7A[0]]: "",
        [Q7A[1]]: "",
        [Q7A[2]]: "",
        [Q7A[3]]: ""
      },
      correctAnswer: "ASTM B88"
    },
    {
      question: "A stretch of Type L copper tubing used in a gas system, must comply with which of the following standards? ",
      answers: {
        [Q8A[0]]: "",
        [Q8A[1]]: "",
        [Q8A[2]]: "",
        [Q8A[3]]: ""
      },
      correctAnswer: "ASTM B88"
    },
    {
      question: "Flare nuts must be forged from UNS C37700 brass, and shall not be: ",
      answers: {
        [Q9A[0]]: "",
        [Q9A[1]]: "",
        [Q9A[2]]: "",
        [Q9A[3]]: ""
      },
      correctAnswer: "Externally machined"
    },
    {
      question: "A tubing fitting is to be installed into a piping system. The operating pressure of the piping system is 82 psig (565 kPa). What is the minimum required pressure rating for the tubing fitting? ",
      answers: {
        [Q10A[0]]: "",
        [Q10A[1]]: "",
        [Q10A[2]]: "",
        [Q10A[3]]: ""
      },
      correctAnswer: "125 psig (860 kPa)"
    },
    {
      question: "A stretch of Type L copper tubing is to be laid underground. Which of the following materials must the tubing be externally coated with, at the time of manufacture? ",
      answers: {
        [Q11A[0]]: "",
        [Q11A[1]]: "",
        [Q11A[2]]: "",
        [Q11A[3]]: ""
      },
      correctAnswer: "Extruded polyethylene or PVC resin"
    },
    {
      question: "Type K Copper tubing placed underground, must be externally coated with what material during the time of manufacture? ",
      answers: {
        [Q12A[0]]: "",
        [Q12A[1]]: "",
        [Q12A[2]]: "",
        [Q12A[3]]: ""
      },
      correctAnswer: "Type K copper tubing placed underground, does not need to be coated with any material during the time of manufacture."
    },
    {
      question: "Tubing shall consist of which of the following? ",
      answers: {
        [Q13A[0]]: "",
        [Q13A[1]]: "",
        [Q13A[2]]: "",
        [Q13A[3]]: ""
      },
      correctAnswer: "Seamless copper"
    },
    {
      question: "A hose or hose fitting not used in a cutting or welding system shall have a minimum working pressure of 350 psig (2400 kPA) and comply with which of the following standards? ",
      answers: {
        [Q14A[0]]: "",
        [Q14A[1]]: "",
        [Q14A[2]]: "",
        [Q14A[3]]: ""
      },
      correctAnswer: "CSA CAN1-8.3 or CSA CAN/CGA 8.1"
    },
    {
      question: "A hose used in a welding system hall comply with which of the following standards? ",
      answers: {
        [Q15A[0]]: "",
        [Q15A[1]]: "",
        [Q15A[2]]: "",
        [Q15A[3]]: ""
      },
      correctAnswer: "CAN/CSA-W117.2"
    },
    {
      question: "A material used in a piping system is not specified in Clause 6.2. This material may only be used on the condition that it: ",
      answers: {
        [Q16A[0]]: "",
        [Q16A[1]]: "",
        [Q16A[2]]: "",
        [Q16A[3]]: ""
      },
      correctAnswer: "Conforms to a nationally recognized standard or to a test report of a nationally recognized certification organization."
    },
    {
      question: "Plastic piping and tubing shall comply with which of the following standards? ",
      answers: {
        [Q17A[0]]: "",
        [Q17A[1]]: "",
        [Q17A[2]]: "",
        [Q17A[3]]: ""
      },
      correctAnswer: "CSA B137.4"
    },
    {
      question: "A fitting that is used in a plastic piping system must comply with which of the following standards? ",
      answers: {
        [Q18A[0]]: "",
        [Q18A[1]]: "",
        [Q18A[2]]: "",
        [Q18A[3]]: ""
      },
      correctAnswer: "CSA B137.4 or CSA B137.4.1"
    },
    {
      question: "When installing piping for a liquid propane system, which of the following may not be used? ",
      answers: {
        [Q19A[0]]: "",
        [Q19A[1]]: "",
        [Q19A[2]]: "",
        [Q19A[3]]: ""
      },
      correctAnswer: "Plastic piping"
    },
    {
      question: "A system of plastic piping that does not terminate above ground and outside the building, may only be used for: ",
      answers: {
        [Q20A[0]]: "",
        [Q20A[1]]: "",
        [Q20A[2]]: "",
        [Q20A[3]]: ""
      },
      correctAnswer: "Outdoor underground service"
    },
    {
      question: "A piping system is to be set up on the downstream side of a vaporizer in a propane application. This piping system will consist of steel pipe and plastic pipe. Starting from the propane application, the plastic pipe must NOT be used in the pipeline, for a minimum of how many feet? ",
      answers: {
        [Q21A[0]]: "",
        [Q21A[1]]: "",
        [Q21A[2]]: "",
        [Q21A[3]]: ""
      },
      correctAnswer: "10 feet"
    },
    {
      question: "Plastic piping shall not be used where the steady-state operating temperature of the materials will exceed how many degrees? ",
      answers: {
        [Q22A[0]]: "",
        [Q22A[1]]: "",
        [Q22A[2]]: "",
        [Q22A[3]]: ""
      },
      correctAnswer: "86 F (30 C)"
    },
    {
      question: "Plastic piping shall not used wherever ambient temperatures exceed how many degrees? ",
      answers: {
        [Q23A[0]]: "",
        [Q23A[1]]: "",
        [Q23A[2]]: "",
        [Q23A[3]]: ""
      },
      correctAnswer: "122 F (50 C)"
    },
    {
      question: "A stretch of plastic piping terminates above ground and outside the building. The piping has already been completely encased with a certified metallic sheathing that extends a minimum of 6 inches below grade. What must also be ensured in addition to this? ",
      answers: {
        [Q24A[0]]: "",
        [Q24A[1]]: "",
        [Q24A[2]]: "",
        [Q24A[3]]: ""
      },
      correctAnswer: "The plastic piping or tubing is not subject to external loading stresses created by other piping, appliances, or equipment."
    },
    {
      question: "Corrugated stainless steel tubing (CSST) must comply with which of the following standards? ",
      answers: {
        [Q25A[0]]: "",
        [Q25A[1]]: "",
        [Q25A[2]]: "",
        [Q25A[3]]: ""
      },
      correctAnswer: "ANSI/LC 1/CSA 6.26"
    },
    {
      question: "Corrugated stainless steel tubing (CSST) that does not comply with ANSI/LC 1/CSA 6.26, may be permitted on the grounds that it complies with: ",
      answers: {
        [Q26A[0]]: "",
        [Q26A[1]]: "",
        [Q26A[2]]: "",
        [Q26A[3]]: ""
      },
      correctAnswer: "CSA publication CGA Certification Laboratory Requirement LAB-009"
    },
    {
      question: "An HVAC technician wishes to use corrugated stainless steel tubing (CSST) as a gas connector. Is this permitted? ",
      answers: {
        [Q27A[0]]: "",
        [Q27A[1]]: "",
        [Q27A[2]]: "",
        [Q27A[3]]: ""
      },
      correctAnswer: "No"
    },
    {
      question: "Piping, tubing and hose shall be of sufficient size to provide a supply of gas to meet the requirements of: ",
      answers: {
        [Q28A[0]]: "",
        [Q28A[1]]: "",
        [Q28A[2]]: "",
        [Q28A[3]]: ""
      },
      correctAnswer: "Volume and pressure at that point of use"
    },
    {
      question: "The maximum allowable pressure drop in a natural gas or propane system, with a supply pressure of exactly 12 in w.c. is what? ",
      answers: {
        [Q29A[0]]: "",
        [Q29A[1]]: "",
        [Q29A[2]]: "",
        [Q29A[3]]: ""
      },
      correctAnswer: "1.0 in w.c"
    },
    {
      question: "A piping or tubing system supplied at pressured up to and including 14 in w.c. (3.5 kPa) shall be designed to prevent the loss in pressure from exceeding the values specified in Table 6.1, between which points? ",
      answers: {
        [Q30A[0]]: "",
        [Q30A[1]]: "",
        [Q30A[2]]: "",
        [Q30A[3]]: ""
      },
      correctAnswer: "The appliance and either the termination of the utility installation or the last-stage regulator"
    },
    {
      question: "A new piping system is to be designed to supply natural gas appliances. The minimum size of pipe, tubing and fittings shall be determined in accordance with good engineering practice, such as:",
      answers: {
        [Q31A[0]]: "",
        [Q31A[1]]: "",
        [Q31A[2]]: "",
        [Q31A[3]]: ""
      },
      correctAnswer: "The use of the tables found in Annex A, or by method of calculation outlined in Annex A"
    },
    {
      question: "A piping or tubing system operating at a pressure exceeding 14 in w.c. (3.5 kPa) shall be designed to ensure an adequate supply of gas to each appliance served at the respective designated pressure rating, as well as:",
      answers: {
        [Q32A[0]]: "",
        [Q32A[1]]: "",
        [Q32A[2]]: "",
        [Q32A[3]]: ""
      },
      correctAnswer: "Ensure that the appliance will not be overpressured under conditions of no flow"
    },
    {
      question: "A 2 psig (14 kPa) pressure regulator shall have the piping or tubing system designed to provide adequate gas pressure to it, such that it:",
      answers: {
        [Q33A[0]]: "",
        [Q33A[1]]: "",
        [Q33A[2]]: "",
        [Q33A[3]]: ""
      },
      correctAnswer: "Matches downstream load requirements"
    },
    {
      question: "Plastic piping carrying propane vapour may be sized by the use of the tables found in Annex B, or alternatively: ",
      answers: {
        [Q34A[0]]: "",
        [Q34A[1]]: "",
        [Q34A[2]]: "",
        [Q34A[3]]: ""
      },
      correctAnswer: "By method of calculation outlined in Annex B"
    },
    {
      question: "Annex A is based on natural gas having a relative density of what? ",
      answers: {
        [Q35A[0]]: "",
        [Q35A[1]]: "",
        [Q35A[2]]: "",
        [Q35A[3]]: ""
      },
      correctAnswer: "0.60"
    },
    {
      question: "Annex B is based on propane having a relative density of what? ",
      answers: {
        [Q36A[0]]: "",
        [Q36A[1]]: "",
        [Q36A[2]]: "",
        [Q36A[3]]: ""
      },
      correctAnswer: "1.52"
    },
    {
      question: "Annexes A and B give 'what' as equivalent length of straight pipe in ft (m) to be added to the actual length to obtain the total equivalent length on which pressure loss calculations shall be based. ",
      answers: {
        [Q37A[0]]: "",
        [Q37A[1]]: "",
        [Q37A[2]]: "",
        [Q37A[3]]: ""
      },
      correctAnswer: "The resistance of bends, fittings and valves"
    },
    {
      question: "In a piping system carrying natural gas, Schedule 80 pipe is to be used when threaded piping is less than: ",
      answers: {
        [Q38A[0]]: "",
        [Q38A[1]]: "",
        [Q38A[2]]: "",
        [Q38A[3]]: ""
      },
      correctAnswer: "NPS 1/2"
    },
    {
      question: "In an indoor piping system carrying propane, piping less than NPS 1/2 shall not be used. However, NPS 3/8 piping may be used as a branch line, on the condition that it does not exceed:",
      answers: {
        [Q39A[0]]: "",
        [Q39A[1]]: "",
        [Q39A[2]]: "",
        [Q39A[3]]: ""
      },
      correctAnswer: "25 ft in length"
    },
    {
      question: "In a concealed location, all piping must be equal to or greater than: ",
      answers: {
        [Q40A[0]]: "",
        [Q40A[1]]: "",
        [Q40A[2]]: "",
        [Q40A[3]]: ""
      },
      correctAnswer: "NPS 1/2"
    },
    {
      question: "In a piping or tubing system, the total volume of gas shall:",
      answers: {
        [Q41A[0]]: "",
        [Q41A[1]]: "",
        [Q41A[2]]: "",
        [Q41A[3]]: ""
      },
      correctAnswer: "Include an allowance for known future extensions"
    },
    {
      question: "When calculating the total volume of gas for an appliance, an acceptable alternative to a missing appliance rating plate is: ",
      answers: {
        [Q42A[0]]: "",
        [Q42A[1]]: "",
        [Q42A[2]]: "",
        [Q42A[3]]: ""
      },
      correctAnswer: "The appliance manufacturer"
    },
    {
      question: "A percentage of the total volume of gas may be used, on the condition that diversity of load is established to the satisfaction of the: ",
      answers: {
        [Q43A[0]]: "",
        [Q43A[1]]: "",
        [Q43A[2]]: "",
        [Q43A[3]]: ""
      },
      correctAnswer: "Authority having jurisdiction"
    },
    {
      question: "When determining the gas pressure required for an appliance, which of the following are acceptable sources? ",
      answers: {
        [Q44A[0]]: "",
        [Q44A[1]]: "",
        [Q44A[2]]: "",
        [Q44A[3]]: ""
      },
      correctAnswer: "The appliance rating plate"
    },
    {
      question: "In the event that the gas pressure to an appliance is in excess of the pressure listed on the appliance rating plate, what must be provided in the system, to the appliance? ",
      answers: {
        [Q45A[0]]: "",
        [Q45A[1]]: "",
        [Q45A[2]]: "",
        [Q45A[3]]: ""
      },
      correctAnswer: "A pressure regulator"
    },
    {
      question: "When determining pressure drop in a piping or tubing system, the resistance offered by the length of piping or tubing must also be added to the resistance offered by: ",
      answers: {
        [Q46A[0]]: "",
        [Q46A[1]]: "",
        [Q46A[2]]: "",
        [Q46A[3]]: ""
      },
      correctAnswer: "Bends, fittings and valves"
    },
    {
      question: "When an existing piping or tubing system is of adequate capacity for an additional appliance, the extension must be sized to meet the requirements of which Clause? ",
      answers: {
        [Q47A[0]]: "",
        [Q47A[1]]: "",
        [Q47A[2]]: "",
        [Q47A[3]]: ""
      },
      correctAnswer: "Clause 6.3"
    },
    {
      question: "When an existing piping or tubing system is not of adequate capacity for an additional appliance, the extension must be sized in accordance with the appropriate clause, within how many inches of the point of  the supplier termination or the line pressure regulator? ",
      answers: {
        [Q48A[0]]: "",
        [Q48A[1]]: "",
        [Q48A[2]]: "",
        [Q48A[3]]: ""
      },
      correctAnswer: "24 inches"
    },
    {
      question: "Concealed piping or tubing containing fitting or joints shall not be run where the fittings or joints cannot be: ",
      answers: {
        [Q49A[0]]: "",
        [Q49A[1]]: "",
        [Q49A[2]]: "",
        [Q49A[3]]: ""
      },
      correctAnswer: "Inspected and tested in accordance with Clause 6.22 in their final position prior to being concealed"
    },
    {
      question: "In which of the following places, may piping or tubing not be installed? ",
      answers: {
        [Q50A[0]]: "",
        [Q50A[1]]: "",
        [Q50A[2]]: "",
        [Q50A[3]]: ""
      },
      correctAnswer: "All answers listed"
    },
    {
      question: "Piping or tubing shall not be concealed where a:",
      answers: {
        [Q51A[0]]: "",
        [Q51A[1]]: "",
        [Q51A[2]]: "",
        [Q51A[3]]: ""
      },
      correctAnswer: "Corrosive chemical is used"
    },
    {
      question: "Piping or tubing in solid flooring, such as concrete, shall be laid in channels and suitably covered to permit access to the piping or tubing. What is another acceptable alternative?",
      answers: {
        [Q52A[0]]: "",
        [Q52A[1]]: "",
        [Q52A[2]]: "",
        [Q52A[3]]: ""
      },
      correctAnswer: "Encasing the piping or tubing in ducts so that there is free air space around the pipe or tube. Such a duct shall be ventilated."
    },
    {
      question: "Each vertical piping chase shall have an opening at the top and bottom, and the opening shall have a minimum area equivalent to a round opening of: ",
      answers: {
        [Q53A[0]]: "",
        [Q53A[1]]: "",
        [Q53A[2]]: "",
        [Q53A[3]]: ""
      },
      correctAnswer: "1 inch in diameter"
    },
    {
      question: "Identify which of the following clauses states: 'Piping may be installed in a false ceiling space, including one used as a return-air plenum of a central warm-air or air-conditioning system.'",
      answers: {
        [Q54A[0]]: "",
        [Q54A[1]]: "",
        [Q54A[2]]: "",
        [Q54A[3]]: ""
      },
      correctAnswer: "Clause 6.7.6"
    },
    {
      question: "Piping and fittings shall be clear and free from: ",
      answers: {
        [Q55A[0]]: "",
        [Q55A[1]]: "",
        [Q55A[2]]: "",
        [Q55A[3]]: ""
      },
      correctAnswer: "Cutting burrs, threading burrs, scale and defects"
    },
    {
      question: "The ends of all piping shall be: ",
      answers: {
        [Q56A[0]]: "",
        [Q56A[1]]: "",
        [Q56A[2]]: "",
        [Q56A[3]]: ""
      },
      correctAnswer: "Reamed"
    },
    {
      question: "Piping or tubing shall not be supported by:",
      answers: {
        [Q57A[0]]: "",
        [Q57A[1]]: "",
        [Q57A[2]]: "",
        [Q57A[3]]: ""
      },
      correctAnswer: "Other piping or tubing"
    },
    {
      question: "A girder, beam, joist or other structural member must not be cut for the installation of piping in such a manner as to reduce its strength below: ",
      answers: {
        [Q58A[0]]: "",
        [Q58A[1]]: "",
        [Q58A[2]]: "",
        [Q58A[3]]: ""
      },
      correctAnswer: "That required for the purpose for which it is intended"
    },
    {
      question: "When air, oxygen, or another gas under pressure is used in connection with the gas supply, what shall be provided as close as practicable to the point of interconnection? ",
      answers: {
        [Q59A[0]]: "",
        [Q59A[1]]: "",
        [Q59A[2]]: "",
        [Q59A[3]]: ""
      },
      correctAnswer: "A back check valve, or other suitable equipment"
    },
    {
      question: "What must be installed directly downstream of a filter, when a filter is used in a piping system?",
      answers: {
        [Q60A[0]]: "",
        [Q60A[1]]: "",
        [Q60A[2]]: "",
        [Q60A[3]]: ""
      },
      correctAnswer: "A low-pressure indicator"
    },
    {
      question: "Manufacturer's fabricated fittings are to be used in welded piping systems except as permitted in: ",
      answers: {
        [Q61A[0]]: "",
        [Q61A[1]]: "",
        [Q61A[2]]: "",
        [Q61A[3]]: ""
      },
      correctAnswer: "Clause 6.8.8"
    },
    {
      question: "In the case where a gas supply header is NPS 2-1/2 or larger, the branch line connection may be a job-fabricated welded fitting, only if: ",
      answers: {
        [Q62A[0]]: "",
        [Q62A[1]]: "",
        [Q62A[2]]: "",
        [Q62A[3]]: ""
      },
      correctAnswer: "The branch line does not exceed 50% of the pipe diameter of the gas supply header, and in no case, be less than NPS 3/4"
    },
    {
      question: "Piping and tubing supports that are used must be metallic, and installed to avoid: ",
      answers: {
        [Q63A[0]]: "",
        [Q63A[1]]: "",
        [Q63A[2]]: "",
        [Q63A[3]]: ""
      },
      correctAnswer: "Galvanic action between the piping or tubing and the supports"
    },
    {
      question: "A joint that exists in steel piping, must be which of the following? ",
      answers: {
        [Q64A[0]]: "",
        [Q64A[1]]: "",
        [Q64A[2]]: "",
        [Q64A[3]]: ""
      },
      correctAnswer: "All of these"
    },
    {
      question: "Piping of what size or greater, requires a welded pipe joint? ",
      answers: {
        [Q65A[0]]: "",
        [Q65A[1]]: "",
        [Q65A[2]]: "",
        [Q65A[3]]: ""
      },
      correctAnswer: "NPS 2 1/2"
    },
    {
      question: "Welding of gas piping shall only be performed by an operator who is: ",
      answers: {
        [Q66A[0]]: "",
        [Q66A[1]]: "",
        [Q66A[2]]: "",
        [Q66A[3]]: ""
      },
      correctAnswer: "Registered under the applicable provincial or territorial legislation"
    },
    {
      question: "The criteria for acceptable welds is specified in which resource? ",
      answers: {
        [Q67A[0]]: "",
        [Q67A[1]]: "",
        [Q67A[2]]: "",
        [Q67A[3]]: ""
      },
      correctAnswer: "Clause 7.10.2 of CSA Z662"
    },
    {
      question: "A piping or fitting thread must comply with ANSI/AME B1.20.1 and be:",
      answers: {
        [Q68A[0]]: "",
        [Q68A[1]]: "",
        [Q68A[2]]: "",
        [Q68A[3]]: ""
      },
      correctAnswer: "Tapered"
    },
    {
      question: "When a certified joint sealant is used, it shall be applied to the: ",
      answers: {
        [Q69A[0]]: "",
        [Q69A[1]]: "",
        [Q69A[2]]: "",
        [Q69A[3]]: ""
      },
      correctAnswer: "Male threads of a metal pipe"
    },
    {
      question: "Gasket materials shall be made of materials who are resistant to any action of gas, such as: ",
      answers: {
        [Q70A[0]]: "",
        [Q70A[1]]: "",
        [Q70A[2]]: "",
        [Q70A[3]]: ""
      },
      correctAnswer: "Neoprene or other similar material"
    },
    {
      question: "An approved for gas lubricant which follows the manufacturer's recommendations, and is used in a valve or a control, shall be capable of withstanding: ",
      answers: {
        [Q71A[0]]: "",
        [Q71A[1]]: "",
        [Q71A[2]]: "",
        [Q71A[3]]: ""
      },
      correctAnswer: "The service conditions to which it can be subjected"
    },
    {
      question: "A joint used in brass tubing, can be made by which of the following? ",
      answers: {
        [Q72A[0]]: "",
        [Q72A[1]]: "",
        [Q72A[2]]: "",
        [Q72A[3]]: ""
      },
      correctAnswer: "A press-connect fitting"
    },
    {
      question: "A bushing used in a change of one pipe size, must be made of which material? ",
      answers: {
        [Q73A[0]]: "",
        [Q73A[1]]: "",
        [Q73A[2]]: "",
        [Q73A[3]]: ""
      },
      correctAnswer: "Steel"
    },
    {
      question: "Plastic pipe and fittings may only be joined by which of the following methods? ",
      answers: {
        [Q74A[0]]: "",
        [Q74A[1]]: "",
        [Q74A[2]]: "",
        [Q74A[3]]: ""
      },
      correctAnswer: "Heat fusion, electro fusion, or mechanical methods"
    },
    {
      question: "A branch piping outlet that is installed in the main supply piping before it is known what size piping is required to be connected to it, shall have an outlet that is: ",
      answers: {
        [Q75A[0]]: "",
        [Q75A[1]]: "",
        [Q75A[2]]: "",
        [Q75A[3]]: ""
      },
      correctAnswer: "The same size as the piping which supplies it"
    },
    {
      question: "Rigid piping may be used to connect an appliance to the building piping only:",
      answers: {
        [Q76A[0]]: "",
        [Q76A[1]]: "",
        [Q76A[2]]: "",
        [Q76A[3]]: ""
      },
      correctAnswer: "Where approved"
    },
    {
      question: "Corrugated stainless steel tubing (CSST) may only be connected to an appliance that is:",
      answers: {
        [Q77A[0]]: "",
        [Q77A[1]]: "",
        [Q77A[2]]: "",
        [Q77A[3]]: ""
      },
      correctAnswer: "Secured in place (non-removable)"
    },
    {
      question: "A quick-disconnect device must not be used when connecting appliances that are:",
      answers: {
        [Q78A[0]]: "",
        [Q78A[1]]: "",
        [Q78A[2]]: "",
        [Q78A[3]]: ""
      },
      correctAnswer: "Indoors, in a residential building"
    },
    {
      question: "A gas convenience outlet must be certified to which standard? ",
      answers: {
        [Q79A[0]]: "",
        [Q79A[1]]: "",
        [Q79A[2]]: "",
        [Q79A[3]]: ""
      },
      correctAnswer: "ANSI Z21.90/CSA 6.24"
    },
    {
      question: "A quick-disconnect device must be certified to which standard? ",
      answers: {
        [Q80A[0]]: "",
        [Q80A[1]]: "",
        [Q80A[2]]: "",
        [Q80A[3]]: ""
      },
      correctAnswer: "ANSI Z21.41/CSA 6.9"
    },
    {
      question: "An appliance shall be adequately supported and connected to the piping in such a way that there is: ",
      answers: {
        [Q81A[0]]: "",
        [Q81A[1]]: "",
        [Q81A[2]]: "",
        [Q81A[3]]: ""
      },
      correctAnswer: "No undue strain on the connection"
    },
    {
      question: "When an appliance is not connected to an outlet of a piping system, which of the following methods are acceptable for making said outlet tight?",
      answers: {
        [Q82A[0]]: "",
        [Q82A[1]]: "",
        [Q82A[2]]: "",
        [Q82A[3]]: ""
      },
      correctAnswer: "a plugged valve"
    },
    {
      question: "An unthreaded portion of a piping outlet shall extend at least how many inches through a finished wall? ",
      answers: {
        [Q83A[0]]: "",
        [Q83A[1]]: "",
        [Q83A[2]]: "",
        [Q83A[3]]: ""
      },
      correctAnswer: "1 inch"
    },
    {
      question: "How close shall a piping outlet be located to the appliance being served? ",
      answers: {
        [Q84A[0]]: "",
        [Q84A[1]]: "",
        [Q84A[2]]: "",
        [Q84A[3]]: ""
      },
      correctAnswer: "As close as practicable"
    },
    {
      question: "A dirt pocket is to be installed at the bottom of any piping or tubing on: ",
      answers: {
        [Q85A[0]]: "",
        [Q85A[1]]: "",
        [Q85A[2]]: "",
        [Q85A[3]]: ""
      },
      correctAnswer: "The final drop serving an appliance"
    },
    {
      question: "A dirt pocket does not have to be installed at the bottom of any piping or tubing system on the final drop serving an appliance, if that appliance is which of the following? ",
      answers: {
        [Q86A[0]]: "",
        [Q86A[1]]: "",
        [Q86A[2]]: "",
        [Q86A[3]]: ""
      },
      correctAnswer: "A range, clothes dryer, gas log, or room heater"
    },
    {
      question: "A dirt pocket is installed into an NPS 3-1/2 piping system. What is the appropriate diameter of this dirt pocket?",
      answers: {
        [Q87A[0]]: "",
        [Q87A[1]]: "",
        [Q87A[2]]: "",
        [Q87A[3]]: ""
      },
      correctAnswer: "NPS 2"
    },
    {
      question: "A drip or dirt pocket shall be located where it is readily accessible to permit:",
      answers: {
        [Q88A[0]]: "",
        [Q88A[1]]: "",
        [Q88A[2]]: "",
        [Q88A[3]]: ""
      },
      correctAnswer: "Cleaning and emptying"
    },
    {
      question: "A drop or dirt pocket shall be:",
      answers: {
        [Q89A[0]]: "",
        [Q89A[1]]: "",
        [Q89A[2]]: "",
        [Q89A[3]]: ""
      },
      correctAnswer: "Capped"
    },
    {
      question: "A drip pocket shall be provided at all points in a piping system where 'what' can collect? ",
      answers: {
        [Q90A[0]]: "",
        [Q90A[1]]: "",
        [Q90A[2]]: "",
        [Q90A[3]]: ""
      },
      correctAnswer: "Condensation"
    },
    {
      question: "A defective section of piping shall only be: ",
      answers: {
        [Q91A[0]]: "",
        [Q91A[1]]: "",
        [Q91A[2]]: "",
        [Q91A[3]]: ""
      },
      correctAnswer: "Replaced"
    },
    {
      question: "Bushings must not be: ",
      answers: {
        [Q92A[0]]: "",
        [Q92A[1]]: "",
        [Q92A[2]]: "",
        [Q92A[3]]: ""
      },
      correctAnswer: "Nested"
    },
    {
      question: "A pipe fitting containing both left and right hand threads, a thread protector, or running threads shall: ",
      answers: {
        [Q93A[0]]: "",
        [Q93A[1]]: "",
        [Q93A[2]]: "",
        [Q93A[3]]: ""
      },
      correctAnswer: "Not be used"
    },
    {
      question: "Where piping is concealed, a union or a combination of fittings shall not be used if they are designed and intended to act as: ",
      answers: {
        [Q94A[0]]: "",
        [Q94A[1]]: "",
        [Q94A[2]]: "",
        [Q94A[3]]: ""
      },
      correctAnswer: "A swing joint"
    },
    {
      question: "An electric circuit must not utilize piping or tubing in lieu of wiring, except for a device that is incorporated as part of an appliance, such as a control circuit, ignition circuit, or electronic flame-detection device circuit. These devices must be: ",
      answers: {
        [Q95A[0]]: "",
        [Q95A[1]]: "",
        [Q95A[2]]: "",
        [Q95A[3]]: ""
      },
      correctAnswer: "Low voltage"
    },
    {
      question: "Which of the following must not be used in a piping system? ",
      answers: {
        [Q96A[0]]: "",
        [Q96A[1]]: "",
        [Q96A[2]]: "",
        [Q96A[3]]: ""
      },
      correctAnswer: "A street elbow, close nipple, or street tee"
    },
    {
      question: "Piping that is used underground must have a nominal diameter that is at least: ",
      answers: {
        [Q97A[0]]: "",
        [Q97A[1]]: "",
        [Q97A[2]]: "",
        [Q97A[3]]: ""
      },
      correctAnswer: "NPS 1/2"
    },
    {
      question: "Underground piping systems shall only be joined or connected by approved mechanical compression, press-connect fittings and/or: ",
      answers: {
        [Q98A[0]]: "",
        [Q98A[1]]: "",
        [Q98A[2]]: "",
        [Q98A[3]]: ""
      },
      correctAnswer: "Welding"
    },
    {
      question: "Underground tubing systems shall only be joined or connected by approved mechanical compression, an approved flared or press-connect fittings and/or: ",
      answers: {
        [Q99A[0]]: "",
        [Q99A[1]]: "",
        [Q99A[2]]: "",
        [Q99A[3]]: ""
      },
      correctAnswer: "Brazing"
    },
    {
      question: "Piping that is located directly below a parking lot, must be located a maximum of how many inches from the surface?",
      answers: {
        [Q100A[0]]: "",
        [Q100A[1]]: "",
        [Q100A[2]]: "",
        [Q100A[3]]: ""
      },
      correctAnswer: "24 inches"
    },
    {
      question: "A trench built for underground piping or tubing must be properly graded, such that it prevents: ",
      answers: {
        [Q101A[0]]: "",
        [Q101A[1]]: "",
        [Q101A[2]]: "",
        [Q101A[3]]: ""
      },
      correctAnswer: "A sag in the piping or tubing"
    },
    {
      question: "Backfill material used to cover underground piping must be free from:",
      answers: {
        [Q102A[0]]: "",
        [Q102A[1]]: "",
        [Q102A[2]]: "",
        [Q102A[3]]: ""
      },
      correctAnswer: "Any material that can damage the piping or tubing"
    },
    {
      question: "Underground piping or tubing must not pass below/under: ",
      answers: {
        [Q103A[0]]: "",
        [Q103A[1]]: "",
        [Q103A[2]]: "",
        [Q103A[3]]: ""
      },
      correctAnswer: "A foundation, wall or building."
    },
    {
      question: "Piping or tubing entering a building must rise above grade before entry, unless permitted by:",
      answers: {
        [Q104A[0]]: "",
        [Q104A[1]]: "",
        [Q104A[2]]: "",
        [Q104A[3]]: ""
      },
      correctAnswer: "The authority having jurisdiction"
    },
    {
      question: "Any piping or tubing that is to pass through an outside wall below ground level, shall be provided with 'what' at the point of passing?",
      answers: {
        [Q105A[0]]: "",
        [Q105A[1]]: "",
        [Q105A[2]]: "",
        [Q105A[3]]: ""
      },
      correctAnswer: "A watertight seal"
    },
    {
      question: "A piping system for a new building is laid under a stretch of pavement. The piping rises above ground level in order to make an entry to the building. What must be inserted at this point to protect the piping or tubing and permit free movement of the soil/covering? ",
      answers: {
        [Q106A[0]]: "",
        [Q106A[1]]: "",
        [Q106A[2]]: "",
        [Q106A[3]]: ""
      },
      correctAnswer: "A sleeve"
    },
    {
      question: "A vent pipe inspection point shall be installed adjacent to a building, either when the entire piping or tubing is covered with paving, or when: ",
      answers: {
        [Q107A[0]]: "",
        [Q107A[1]]: "",
        [Q107A[2]]: "",
        [Q107A[3]]: ""
      },
      correctAnswer: "Paving extends 25 ft or more from the building"
    },
    {
      question: "An approved transition fitting shall be used for connecting piping or tubing of either steel or copper to which material? ",
      answers: {
        [Q108A[0]]: "",
        [Q108A[1]]: "",
        [Q108A[2]]: "",
        [Q108A[3]]: ""
      },
      correctAnswer: "Plastic"
    },
    {
      question: "The gas supply to underground plastic piping or tubing shall be controlled by what? ",
      answers: {
        [Q109A[0]]: "",
        [Q109A[1]]: "",
        [Q109A[2]]: "",
        [Q109A[3]]: ""
      },
      correctAnswer: "A shut-off valve situated above ground"
    },
    {
      question: "Which type of piping or tubing must be accompanied by a tracing wire, or other electronically detectable tracing media, when placed underground? ",
      answers: {
        [Q110A[0]]: "",
        [Q110A[1]]: "",
        [Q110A[2]]: "",
        [Q110A[3]]: ""
      },
      correctAnswer: "Plastic piping or tubing"
    },
    {
      question: "A system of outdoor pipes is installed in an area with a corrosive atmosphere. What must the piping or tubing be protected with? ",
      answers: {
        [Q111A[0]]: "",
        [Q111A[1]]: "",
        [Q111A[2]]: "",
        [Q111A[3]]: ""
      },
      correctAnswer: "Painting or coating"
    },
    {
      question: "Piping, tubing or fittings laid underground shall be protected against what?",
      answers: {
        [Q112A[0]]: "",
        [Q112A[1]]: "",
        [Q112A[2]]: "",
        [Q112A[3]]: ""
      },
      correctAnswer: "Corrosion"
    },
    {
      question: "Piping or tubing shall have adequate supports, such as mounts or braces, such that the piping or tubing is able to withstand: ",
      answers: {
        [Q113A[0]]: "",
        [Q113A[1]]: "",
        [Q113A[2]]: "",
        [Q113A[3]]: ""
      },
      correctAnswer: "Expansion, contraction, jarring, vibration, and settling"
    },
    {
      question: "Tubing run inside hollow walls or partitions shall be protected against physical damage and puncture at the joints, studs and plates, only when the tubing is within how many inches of the surface of the wall/partition? ",
      answers: {
        [Q114A[0]]: "",
        [Q114A[1]]: "",
        [Q114A[2]]: "",
        [Q114A[3]]: ""
      },
      correctAnswer: "1.75 inches"
    },
    {
      question: "Piping or tubing shall be located in a position that is free from the arc of movement of all: ",
      answers: {
        [Q115A[0]]: "",
        [Q115A[1]]: "",
        [Q115A[2]]: "",
        [Q115A[3]]: ""
      },
      correctAnswer: "Appliance doors or covers"
    },
    {
      question: "Metallic piping or tubing shall be installed in such a manner that it is not in contact with any other dissimilar metallic pipe or structure, to avoid what? ",
      answers: {
        [Q116A[0]]: "",
        [Q116A[1]]: "",
        [Q116A[2]]: "",
        [Q116A[3]]: ""
      },
      correctAnswer: "Galvanic corrosion"
    },
    {
      question: "When piping or tubing is run in a sleeve, the sleeve must be installed and made of a material such that it protects the piping or tubing from: ",
      answers: {
        [Q117A[0]]: "",
        [Q117A[1]]: "",
        [Q117A[2]]: "",
        [Q117A[3]]: ""
      },
      correctAnswer: "Damage and galvanic action"
    },
    {
      question: "A portion of piping or tubing that passes through masonry or concrete, shall be double wrapped with a pipe wrap tape, or alternatively: ",
      answers: {
        [Q118A[0]]: "",
        [Q118A[1]]: "",
        [Q118A[2]]: "",
        [Q118A[3]]: ""
      },
      correctAnswer: "Sleeved"
    },
    {
      question: "Care shall be exercised to protect plastic materials from what? ",
      answers: {
        [Q119A[0]]: "",
        [Q119A[1]]: "",
        [Q119A[2]]: "",
        [Q119A[3]]: ""
      },
      correctAnswer: "Excessive heat and harmful chemicals"
    },
    {
      question: "When placed in storage, plastic piping and tubing shall be: ",
      answers: {
        [Q120A[0]]: "",
        [Q120A[1]]: "",
        [Q120A[2]]: "",
        [Q120A[3]]: ""
      },
      correctAnswer: "Adequately supported"
    },
    {
      question: "Plastic pipe and tubing must be protected from exposure to: ",
      answers: {
        [Q121A[0]]: "",
        [Q121A[1]]: "",
        [Q121A[2]]: "",
        [Q121A[3]]: ""
      },
      correctAnswer: "Direct sunlight"
    },
    {
      question: "Corrugated stainless steel tubing (CSST) and fittings shall be protected against physical damage in accordance with this Code as well as: ",
      answers: {
        [Q122A[0]]: "",
        [Q122A[1]]: "",
        [Q122A[2]]: "",
        [Q122A[3]]: ""
      },
      correctAnswer: "The manufacturer's certified installation instructions"
    },
    {
      question: "Piping or tubing that is entering a building above grade in a location that does not afford protection from damage by vehicles, shall be protected by what? ",
      answers: {
        [Q123A[0]]: "",
        [Q123A[1]]: "",
        [Q123A[2]]: "",
        [Q123A[3]]: ""
      },
      correctAnswer: "Posts or guardrails"
    },
    {
      question: "Piping or tubing that is protected by posts, designed to prevent vehicular damage, must not be spaced more than how many inches apart?",
      answers: {
        [Q124A[0]]: "",
        [Q124A[1]]: "",
        [Q124A[2]]: "",
        [Q124A[3]]: ""
      },
      correctAnswer: "42 inches"
    },
    {
      question: "Piping or tubing that is protected by posts, designed to prevent vehicular damage, must be buried at least how many inches into the ground?",
      answers: {
        [Q125A[0]]: "",
        [Q125A[1]]: "",
        [Q125A[2]]: "",
        [Q125A[3]]: ""
      },
      correctAnswer: "36 inches"
    },
    {
      question: "Piping or tubing that is protected by a guardrail, designed to prevent vehicular damage, must be located so that the top part of the beam is not less than 24 inches, nor more than how many inches above grade?",
      answers: {
        [Q126A[0]]: "",
        [Q126A[1]]: "",
        [Q126A[2]]: "",
        [Q126A[3]]: ""
      },
      correctAnswer: "30 inches"
    },
    {
      question: "In an assembly building, a tubing system is installed. The tubing system is given yellow banding in accordance with B.149.1-15. This banding must have a minimum width of how many inches? ",
      answers: {
        [Q127A[0]]: "",
        [Q127A[1]]: "",
        [Q127A[2]]: "",
        [Q127A[3]]: ""
      },
      correctAnswer: "1 inch"
    },
    {
      question: "At every care, detention occupancy, commercial, industrial and assembly building, both the piping or tubing and the pressure is to be identified at shut-off valves and wall, ceiling and floor penetrations, only when the pressure in the piping or tubing exceeds what? ",
      answers: {
        [Q128A[0]]: "",
        [Q128A[1]]: "",
        [Q128A[2]]: "",
        [Q128A[3]]: ""
      },
      correctAnswer: "14 in w.c."
    },
    {
      question: "A tubing system in a residential building must have identification intervals that do not exceed how many feet? ",
      answers: {
        [Q129A[0]]: "",
        [Q129A[1]]: "",
        [Q129A[2]]: "",
        [Q129A[3]]: ""
      },
      correctAnswer: "6 ft"
    },
    {
      question: "Every piping or tubing system that enters a building, shall be permanently identified with the room number, apartment number, or the area of the building it serves, only if it has: ",
      answers: {
        [Q130A[0]]: "",
        [Q130A[1]]: "",
        [Q130A[2]]: "",
        [Q130A[3]]: ""
      },
      correctAnswer: "Two or more gas meters"
    },
    {
      question: "A manual shut-off valve of the proper certification and proper type, shall not be subjected to either a temperature or pressure outside of: ",
      answers: {
        [Q131A[0]]: "",
        [Q131A[1]]: "",
        [Q131A[2]]: "",
        [Q131A[3]]: ""
      },
      correctAnswer: "Its certified rating range"
    },
    {
      question: "A readily accessible manual shut-off valve shall be installed for a commercial and industrial-type appliance, in the drop or riser, as close as possible to the: ",
      answers: {
        [Q132A[0]]: "",
        [Q132A[1]]: "",
        [Q132A[2]]: "",
        [Q132A[3]]: ""
      },
      correctAnswer: "Valve train"
    },
    {
      question: "A manual shut-off valve shall be of either the ball, eccentric or lubricated-plug type, where: ",
      answers: {
        [Q133A[0]]: "",
        [Q133A[1]]: "",
        [Q133A[2]]: "",
        [Q133A[3]]: ""
      },
      correctAnswer: "The tubing is 1 inch OD or larger"
    },
    {
      question: "When a shut-off valve controls several piping systems, it shall be readily accessible, provided with an installed handle, clearly marked with an enameled metal, substantial fibre, or other permanent tag, in addition to being: ",
      answers: {
        [Q134A[0]]: "",
        [Q134A[1]]: "",
        [Q134A[2]]: "",
        [Q134A[3]]: ""
      },
      correctAnswer: "Installed to provide protection from damage"
    },
    {
      question: "A spring-loaded valve shall be installed in a manner that will prevent its plug from being accidentally lifted off the: ",
      answers: {
        [Q135A[0]]: "",
        [Q135A[1]]: "",
        [Q135A[2]]: "",
        [Q135A[3]]: ""
      },
      correctAnswer: "Valve seat"
    },
    {
      question: "Piping or tubing that extends from one building to another shall have a shut-off valve at the point of exit from the first building, and one at: ",
      answers: {
        [Q136A[0]]: "",
        [Q136A[1]]: "",
        [Q136A[2]]: "",
        [Q136A[3]]: ""
      },
      correctAnswer: "The point of entry to the adjoining building"
    },
    {
      question: "A valve must be installed on each riser, where 'what' is distributed from a storage tank to more than one riser by an underground system? ",
      answers: {
        [Q137A[0]]: "",
        [Q137A[1]]: "",
        [Q137A[2]]: "",
        [Q137A[3]]: ""
      },
      correctAnswer: "Propane"
    },
    {
      question: "When multiple outlets are installed in a classroom, laboratory or similar facility, they shall be controlled by a clearly identifiable master shut-off valve that is: ",
      answers: {
        [Q138A[0]]: "",
        [Q138A[1]]: "",
        [Q138A[2]]: "",
        [Q138A[3]]: ""
      },
      correctAnswer: "Readily accessible"
    },
    {
      question: "When a facility as described in Clause 6.18.10 is taken out of service, the supply of gas to the facility shall be either plugged or: ",
      answers: {
        [Q139A[0]]: "",
        [Q139A[1]]: "",
        [Q139A[2]]: "",
        [Q139A[3]]: ""
      },
      correctAnswer: "Capped"
    },
    {
      question: "A safety control device external to a piping system shall include an automatic valve of the manual-reset type to: ",
      answers: {
        [Q140A[0]]: "",
        [Q140A[1]]: "",
        [Q140A[2]]: "",
        [Q140A[3]]: ""
      },
      correctAnswer: "Shut off the gas supply"
    },
    {
      question: "A gas hose connection to a vented appliance shall be prohibited, except as permitted by which clause? ",
      answers: {
        [Q141A[0]]: "",
        [Q141A[1]]: "",
        [Q141A[2]]: "",
        [Q141A[3]]: ""
      },
      correctAnswer: "Clause 7.23.3"
    },
    {
      question: "A gas hose may be used with an unvented appliance only when such an appliance is: ",
      answers: {
        [Q142A[0]]: "",
        [Q142A[1]]: "",
        [Q142A[2]]: "",
        [Q142A[3]]: ""
      },
      correctAnswer: "Mobile during operation, is portable, or requires isolation from vibration"
    },
    {
      question: "When a gas hose is used for permanent installation, it shall not exceed how many feet in length? ",
      answers: {
        [Q143A[0]]: "",
        [Q143A[1]]: "",
        [Q143A[2]]: "",
        [Q143A[3]]: ""
      },
      correctAnswer: "10 ft"
    },
    {
      question: "When a gas hose is used, a slip-on-end shall: ",
      answers: {
        [Q144A[0]]: "",
        [Q144A[1]]: "",
        [Q144A[2]]: "",
        [Q144A[3]]: ""
      },
      correctAnswer: "Not be permitted"
    },
    {
      question: "When using a gas hose from a wall outlet, it shall be located where the passage of persons, vehicles or equipment across the gas hose is: ",
      answers: {
        [Q145A[0]]: "",
        [Q145A[1]]: "",
        [Q145A[2]]: "",
        [Q145A[3]]: ""
      },
      correctAnswer: "At a minimum"
    },
    {
      question: "What must be done to a gas hose, when sign of wear, deterioration or other damage is apparent in the reinforcement material of the gas hose? ",
      answers: {
        [Q146A[0]]: "",
        [Q146A[1]]: "",
        [Q146A[2]]: "",
        [Q146A[3]]: ""
      },
      correctAnswer: "The gas hose must be replaced immediately"
    },
    {
      question: "A metallic gas hose shall not be used in a: ",
      answers: {
        [Q147A[0]]: "",
        [Q147A[1]]: "",
        [Q147A[2]]: "",
        [Q147A[3]]: ""
      },
      correctAnswer: "Concealed location"
    },
    {
      question: "When a metallic gas hose is used for the purpose of interconnecting tanks or equipment, the gas hose must comply with what? ",
      answers: {
        [Q148A[0]]: "",
        [Q148A[1]]: "",
        [Q148A[2]]: "",
        [Q148A[3]]: ""
      },
      correctAnswer: "ULC C536"
    },
    {
      question: "A gas hose that is used for transferring liquid propane from one container to another, must be protected by a hydrostatic relief valve located between:",
      answers: {
        [Q149A[0]]: "",
        [Q149A[1]]: "",
        [Q149A[2]]: "",
        [Q149A[3]]: ""
      },
      correctAnswer: "The shut-off valves on the gas hose"
    },
    {
      question: "In propane applications, for an appliance that serves a temporary construction-heating purpose, a gas hose may be run from a tank and/or vaporizer that is installed outdoors to:",
      answers: {
        [Q150A[0]]: "",
        [Q150A[1]]: "",
        [Q150A[2]]: "",
        [Q150A[3]]: ""
      },
      correctAnswer: "An appliance located within a building"
    },
    {
      question: "Which of the following does a gas hose NOT have to be certified to? ",
      answers: {
        [Q151A[0]]: "",
        [Q151A[1]]: "",
        [Q151A[2]]: "",
        [Q151A[3]]: ""
      },
      correctAnswer: "ANSI Z20.51/CSA 2.5"
    },
    {
      question: "A gas connector must not pass through what? ",
      answers: {
        [Q152A[0]]: "",
        [Q152A[1]]: "",
        [Q152A[2]]: "",
        [Q152A[3]]: ""
      },
      correctAnswer: "A wall, floor, ceiling or partition"
    },
    {
      question: "A gas connector may be used to connect an appliance such as a refrigerator, to the building piping, if it certified to what standard?",
      answers: {
        [Q153A[0]]: "",
        [Q153A[1]]: "",
        [Q153A[2]]: "",
        [Q153A[3]]: ""
      },
      correctAnswer: "ANSI Z21.101/CSA 8.5"
    },
    {
      question: "A gas connector may not be used on a secure vented appliance, such as a free-standing space heater, if the gas connector exceeds: ",
      answers: {
        [Q154A[0]]: "",
        [Q154A[1]]: "",
        [Q154A[2]]: "",
        [Q154A[3]]: ""
      },
      correctAnswer: "2 ft"
    },
    {
      question: "Where a mobile home is not a permanent foundation, the mobile home may be connected by a gas connector, only if it is certified to: ",
      answers: {
        [Q155A[0]]: "",
        [Q155A[1]]: "",
        [Q155A[2]]: "",
        [Q155A[3]]: ""
      },
      correctAnswer: "ANSI Z21.75/CSA 6.27"
    },
    {
      question: "When a piping or tubing system is under test, the source of the test pressure must be: ",
      answers: {
        [Q156A[0]]: "",
        [Q156A[1]]: "",
        [Q156A[2]]: "",
        [Q156A[3]]: ""
      },
      correctAnswer: "Isolated"
    },
    {
      question: "An addition to an existing piping or tubing system does not have to be tested as an individual system in accordance with Clause 6.22, if the addition is less than how many feet in length?",
      answers: {
        [Q157A[0]]: "",
        [Q157A[1]]: "",
        [Q157A[2]]: "",
        [Q157A[3]]: ""
      },
      correctAnswer: "20 ft"
    },
    {
      question: "When any part of a piping or tubing system is to be enclosed or concealed, the tests specified in which Clause, shall precede the work of closing in?",
      answers: {
        [Q158A[0]]: "",
        [Q158A[1]]: "",
        [Q158A[2]]: "",
        [Q158A[3]]: ""
      },
      correctAnswer: "Clause 6.22.2"
    },
    {
      question: "A piping system containing an inert gas is to be purged. Which of the following practices is a safe method of purging the gas? ",
      answers: {
        [Q159A[0]]: "",
        [Q159A[1]]: "",
        [Q159A[2]]: "",
        [Q159A[3]]: ""
      },
      correctAnswer: "Purging the gas to the outdoors in accordance with Clause 6.23.7"
    },
    {
      question: "Purging shall follow engineering practices, when the piping exceeds: ",
      answers: {
        [Q160A[0]]: "",
        [Q160A[1]]: "",
        [Q160A[2]]: "",
        [Q160A[3]]: ""
      },
      correctAnswer: "NPS 4"
    },
    {
      question: "In the absence of a readily accessible burner, an appliance that is not equipped with a continuous pilot shall be purged in accordance with the procedures described in: ",
      answers: {
        [Q161A[0]]: "",
        [Q161A[1]]: "",
        [Q161A[2]]: "",
        [Q161A[3]]: ""
      },
      correctAnswer: "Annex H"
    },
    {
      question: "When purging, the person doing the purging shall remain in: ",
      answers: {
        [Q162A[0]]: "",
        [Q162A[1]]: "",
        [Q162A[2]]: "",
        [Q162A[3]]: ""
      },
      correctAnswer: "Constant attendance"
    },
    {
      question: "When a piping or tubing system is to be purged to the outdoors, the purging line must not terminate within how many feet of a building or air intake?",
      answers: {
        [Q163A[0]]: "",
        [Q163A[1]]: "",
        [Q163A[2]]: "",
        [Q163A[3]]: ""
      },
      correctAnswer: "10 ft"
    },
    {
      question: "When a piping or tubing system is purged to the outdoors, which of the following is prohibited? ",
      answers: {
        [Q164A[0]]: "",
        [Q164A[1]]: "",
        [Q164A[2]]: "",
        [Q164A[3]]: ""
      },
      correctAnswer: "Smoking"
    },
    {
      question: "The appliance piping shall be purged and the pilot burner lighted, only after: ",
      answers: {
        [Q165A[0]]: "",
        [Q165A[1]]: "",
        [Q165A[2]]: "",
        [Q165A[3]]: ""
      },
      correctAnswer: "All piping and tubing systems and hose have been purged"
    },
    {
      question: "When laid atop a roof, horizontal piping shall be supported every 4 feet, if it is less than: ",
      answers: {
        [Q166A[0]]: "",
        [Q166A[1]]: "",
        [Q166A[2]]: "",
        [Q166A[3]]: ""
      },
      correctAnswer: "NPS 1"
    },
    {
      question: "In a recreational vehicle, hose must not be used in lieu of piping or tubing, but may be used in conjunction with: ",
      answers: {
        [Q167A[0]]: "",
        [Q167A[1]]: "",
        [Q167A[2]]: "",
        [Q167A[3]]: ""
      },
      correctAnswer: "Piping or tubing"
    }
  ];
  var UserNumOfQuestions = document.getElementById("NumQuestionsInput").value;
  shuffle(theQuestions);
  let myQuestions = theQuestions.slice(0, UserNumOfQuestions);

  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (String in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label id ="label${questionNumber}">
            <input type="radio" name="question${questionNumber}" value="${String}">
            ${String}
          </label>`
        )
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = ('<ol><li>'+output.join('</li><li>')+'</li></ol>');
  }

  function showResults() {

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");
    const questionContainers = quizContainer.querySelectorAll(".question");

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const questionContainer = questionContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer === currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect=numCorrect+1;

        // color the answers green


        questionContainers[questionNumber].style.color = "lightgreen";
        //sheet.insertRule('input:checked {height: 50px; width: 50px;}', sheet.cssRules.length);
      } else {
        // if answer is wrong or blank
        // color the answers red
        questionContainers[questionNumber].style.color = "red";
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");

  // display quiz right away
  if (displayQuestions == true) {
    shuffle(Q1A);
    shuffle(Q2A);
    shuffle(Q3A);
    shuffle(Q4A);
    shuffle(Q5A);
    shuffle(Q6A);
    shuffle(Q7A);
    shuffle(Q8A);
    shuffle(Q9A);
    shuffle(Q10A);
    shuffle(Q11A);
    shuffle(Q12A);
    shuffle(Q13A);
    shuffle(Q14A);
    shuffle(Q15A);
    shuffle(Q16A);
    shuffle(Q17A);
    shuffle(Q18A);
    shuffle(Q19A);
    shuffle(Q20A);
    shuffle(Q21A);
    shuffle(Q22A);
    shuffle(Q23A);
    shuffle(Q24A);
    shuffle(Q25A);
    shuffle(Q26A);
    shuffle(Q27A);
    shuffle(Q28A);
    shuffle(Q29A);
    shuffle(Q30A);
    shuffle(Q31A);
    shuffle(Q32A);
    shuffle(Q33A);
    shuffle(Q34A);
    shuffle(Q35A);
    shuffle(Q36A);
    shuffle(Q37A);
    shuffle(Q38A);
    shuffle(Q39A);
    shuffle(Q40A);
    shuffle(Q41A);
    shuffle(Q42A);
    shuffle(Q43A);
    shuffle(Q44A);
    shuffle(Q45A);
    shuffle(Q46A);
    shuffle(Q47A);
    shuffle(Q48A);
    shuffle(Q49A);
    shuffle(Q50A);
    shuffle(Q51A);
    shuffle(Q52A);
    shuffle(Q53A);
    shuffle(Q54A);
    shuffle(Q55A);
    shuffle(Q56A);
    shuffle(Q57A);
    shuffle(Q58A);
    shuffle(Q59A);
    shuffle(Q60A);
    shuffle(Q61A);
    shuffle(Q62A);
    shuffle(Q63A);
    shuffle(Q64A);
    shuffle(Q65A);
    shuffle(Q66A);
    shuffle(Q67A);
    shuffle(Q68A);
    shuffle(Q69A);
    shuffle(Q70A);
    shuffle(Q71A);
    shuffle(Q72A);
    shuffle(Q73A);
    shuffle(Q74A);
    shuffle(Q75A);
    shuffle(Q76A);
    shuffle(Q77A);
    shuffle(Q78A);
    shuffle(Q79A);
    shuffle(Q80A);
    shuffle(Q81A);
    shuffle(Q82A);
    shuffle(Q83A);
    shuffle(Q84A);
    shuffle(Q85A);
    shuffle(Q86A);
    shuffle(Q87A);
    shuffle(Q88A);
    shuffle(Q89A);
    shuffle(Q90A);
    shuffle(Q91A);
    shuffle(Q92A);
    shuffle(Q93A);
    shuffle(Q94A);
    shuffle(Q95A);
    shuffle(Q96A);
    shuffle(Q97A);
    shuffle(Q98A);
    shuffle(Q99A);
    shuffle(Q100A);
    shuffle(Q101A);
    shuffle(Q102A);
    shuffle(Q103A);
    shuffle(Q104A);
    shuffle(Q105A);
    shuffle(Q106A);
    shuffle(Q107A);
    shuffle(Q108A);
    shuffle(Q109A);
    shuffle(Q110A);
    shuffle(Q111A);
    shuffle(Q112A);
    shuffle(Q113A);
    shuffle(Q114A);
    shuffle(Q115A);
    shuffle(Q116A);
    shuffle(Q117A);
    shuffle(Q118A);
    shuffle(Q119A);
    shuffle(Q120A);
    shuffle(Q121A);
    shuffle(Q122A);
    shuffle(Q123A);
    shuffle(Q124A);
    shuffle(Q125A);
    shuffle(Q126A);
    shuffle(Q127A);
    shuffle(Q128A);
    shuffle(Q129A);
    shuffle(Q130A);
    shuffle(Q131A);
    shuffle(Q132A);
    shuffle(Q133A);
    shuffle(Q134A);
    shuffle(Q135A);
    shuffle(Q136A);
    shuffle(Q137A);
    shuffle(Q138A);
    shuffle(Q139A);
    shuffle(Q140A);
    shuffle(Q141A);
    shuffle(Q142A);
    shuffle(Q143A);
    shuffle(Q144A);
    shuffle(Q145A);
    shuffle(Q146A);
    shuffle(Q147A);
    shuffle(Q148A);
    shuffle(Q149A);
    shuffle(Q150A);
    shuffle(Q151A);
    shuffle(Q152A);
    shuffle(Q153A);
    shuffle(Q154A);
    shuffle(Q155A);
    shuffle(Q156A);
    shuffle(Q157A);
    shuffle(Q158A);
    shuffle(Q159A);
    shuffle(Q160A);
    shuffle(Q161A);
    shuffle(Q162A);
    shuffle(Q163A);
    shuffle(Q164A);
    shuffle(Q165A);
    shuffle(Q166A);
    shuffle(Q167A);


    buildQuiz();
   }

  // on submit, show results
  submitButton.addEventListener("click", showResults);

}

function shuffle(arra1) {
      let ctr = arra1.length;
      let temp;
      let index;

      while (ctr > 0) {
          index = Math.floor(Math.random() * ctr);
          ctr--;
          temp = arra1[ctr];
          arra1[ctr] = arra1[index];
          arra1[index] = temp;
      }
      return arra1;
  }
