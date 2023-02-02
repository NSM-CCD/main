import nada from "../../images/logos/nada.svg"
import vmr from "../../images/logos/vmr.svg"
import oldCars from "../../images/logos/old-cars.svg"

import dummyCarImage from "../../images/cadillac.png"
import streetRod from "../../images/carousel/street-rod.jpg"
import corvette from "../../images/carousel/corvette.jpg"
import fordPickup from "../../images/carousel/ford-pickup.jpg"
import belAir from "../../images/carousel/belair-interior.jpg"

import classicCom from "../../images/logos/classic-com.svg"

export const trustBarLogos = {
  nadaLogo: nada,
  vmrLogo: vmr,
  oldCarsLogo: oldCars,
  classicComLogo: classicCom,
}

export const trustBarLinks = {
  nada: "https://www.nada.org/nada/consumer-vehicle-values",
  vmr: "http://www.vmrintl.com/",
  oldCars: "https://report.oldcarsweekly.com/",
  classicCom: "https://www.classic.com/",
}

export const mobileLogos = ["nada", "oldCars", "vmr", "classicCom"]
export const desktopLogos = ["nada", "vmr", "oldCars", "classicCom"]

export const getYears = (startYear = 1926, endYear = 2021) => {
  const years = []
  while (startYear <= endYear) {
    years.push(startYear++)
  }
  return years
}

export const processObj = [
  {
    key: 1,
    title: "Enter your vehicle’s details",
    description: `Let’s get specific about your classic and get the most accurate value possible.`,
    image: dummyCarImage,
  },
  {
    key: 2,
    title: "Receive valuation and more",
    description:
      "See your vehicle's pricing, sales history, and related vehicles.",
    image: fordPickup,
  },
  {
    key: 3,
    title: "Get a free quote",
    description: "Save up to 40% with our Agreed Value coverage*",
    image: corvette,
  },
  {
    key: 4,
    title: "Discuss coverage options",
    description:
      "A dedicated collector insurance specialist will assist to tailor options to fit your needs.",
    image: streetRod,
  },
  {
    key: 5,
    title: "Enjoy your passion with peace of mind",
    description:
      "Agreed Value coverage. Top-rated customer service. Exceptional savings.",
    image: belAir,
  },
]

export const makesDB = [
  { companynum: 1218, company: "AC" },
  { companynum: 1187, company: "ACURA" },
  { companynum: 1188, company: "ALFA ROMEO" },
  { companynum: 1220, company: "ALLARD" },
  { companynum: 1378, company: "ALLARD MOTOR WORKS INC." },
  { companynum: 1221, company: "ALLSTATE (KAISER-FRAZER CORP)" },
  { companynum: 1222, company: "ALVIS" },
  { companynum: 1223, company: "AMERICAN AUSTIN" },
  { companynum: 1224, company: "AMERICAN BANTAM" },
  { companynum: 1189, company: "AMERICAN MOTORS" },
  { companynum: 1225, company: "AMPHICAR" },
  { companynum: 1226, company: "ARNOLT-BRISTOL" },
  { companynum: 1227, company: "ASTON MARTIN" },
  { companynum: 1228, company: "AUBURN" },
  { companynum: 1230, company: "AUBURN II" },
  { companynum: 1190, company: "AUDI" },
  { companynum: 1231, company: "AUSTIN" },
  { companynum: 1232, company: "AUSTIN HEALEY" },
  { companynum: 1233, company: "AVANTI II" },
  { companynum: 1235, company: "AVANTI-STUDEBAKER" },
  { companynum: 1236, company: "BENTLEY" },
  { companynum: 1237, company: "BERTONE" },
  { companynum: 1238, company: "BITTER" },
  { companynum: 1239, company: "BIZZARRINI" },
  { companynum: 1026, company: "BMW" },
  { companynum: 1240, company: "BORGWARD" },
  { companynum: 1241, company: "BRICKLIN" },
  { companynum: 1243, company: "BRONSON TRUCKS" },
  { companynum: 1373, company: "BUGATTI" },
  { companynum: 1031, company: "BUICK" },
  { companynum: 1032, company: "CADILLAC" },
  { companynum: 1244, company: "CAPRI II" },
  { companynum: 1245, company: "CHECKER" },
  { companynum: 1035, company: "CHEVROLET" },
  { companynum: 1246, company: "CHRISTY MOTORSPORTS" },
  { companynum: 1037, company: "CHRYSLER" },
  { companynum: 1247, company: "CHRYSLER MASERATI" },
  { companynum: 1248, company: "CITROEN" },
  { companynum: 1249, company: "CLENET" },
  { companynum: 1250, company: "CORD" },
  { companynum: 1251, company: "CROSLEY" },
  { companynum: 1252, company: "CUB" },
  { companynum: 1191, company: "DAEWOO" },
  { companynum: 1192, company: "DAIHATSU" },
  { companynum: 1253, company: "DAIMLER" },
  { companynum: 1255, company: "DAVIS" },
  { companynum: 1256, company: "DE TOMASO" },
  { companynum: 1257, company: "DELAHAYE" },
  { companynum: 1258, company: "DELOREAN" },
  { companynum: 1259, company: "DESOTO" },
  { companynum: 1446, company: "DEUTSCH-BONNET" },
  { companynum: 1052, company: "DODGE" },
  { companynum: 1260, company: "DUAL GHIA" },
  { companynum: 1193, company: "EAGLE" },
  { companynum: 1261, company: "EDSEL" },
  { companynum: 1262, company: "ENGLISH FORD" },
  { companynum: 1263, company: "ERSKINE" },
  { companynum: 1264, company: "ESSEX" },
  { companynum: 1265, company: "ESSEX-TERRAPLANE" },
  { companynum: 1266, company: "EXCALIBUR" },
  { companynum: 1267, company: "FACEL-VEGA" },
  { companynum: 1268, company: "FERRARI" },
  { companynum: 1269, company: "FIAT" },
  { companynum: 1441, company: "FISHER STANDARD" },
  { companynum: 1371, company: "FISKER" },
  { companynum: 1065, company: "FORD" },
  { companynum: 1270, company: "FORD CAPRI" },
  { companynum: 1451, company: "FORD LOTUS" },
  { companynum: 1271, company: "FRANKLIN" },
  { companynum: 1272, company: "FRAZER" },
  { companynum: 1194, company: "GEO" },
  { companynum: 1071, company: "GMC" },
  { companynum: 1273, company: "GRAHAM" },
  { companynum: 1274, company: "GRAHAM-PAIGE" },
  { companynum: 1275, company: "GRIFFITH" },
  { companynum: 1346, company: "HALLENBECK CONCEPT CARS" },
  { companynum: 1277, company: "HAMILTON" },
  { companynum: 1377, company: "HEINKEL" },
  { companynum: 1375, company: "HENNESSEY" },
  { companynum: 1278, company: "HENRY J" },
  { companynum: 1279, company: "HILLMAN" },
  { companynum: 1195, company: "HONDA" },
  { companynum: 1280, company: "HUDSON" },
  { companynum: 1281, company: "HUEBNER" },
  { companynum: 1282, company: "HUMMER" },
  { companynum: 1283, company: "HUPMOBILE" },
  { companynum: 1196, company: "HYUNDAI" },
  { companynum: 1197, company: "INFINITI" },
  { companynum: 1284, company: "INTERMECCANICA" },
  { companynum: 1285, company: "INTERNATIONAL" },
  { companynum: 1286, company: "ISO" },
  { companynum: 1198, company: "ISUZU" },
  { companynum: 1091, company: "JAGUAR" },
  { companynum: 1357, company: "JEEP CORPORATION (AMC)" },
  { companynum: 1287, company: "JENSEN" },
  { companynum: 1288, company: "JENSEN-HEALEY" },
  { companynum: 1380, company: "JOWETT" },
  { companynum: 1289, company: "KAISER" },
  { companynum: 1358, company: "KAISER JEEP CORPORATION" },
  { companynum: 1455, company: "KARMA AUTOMOTIVE" },
  { companynum: 1290, company: "KERSTON" },
  { companynum: 1200, company: "KIA" },
  { companynum: 1291, company: "KING MIDGET" },
  { companynum: 1292, company: "KURTIS" },
  { companynum: 1293, company: "LA SALLE" },
  { companynum: 1389, company: "LAGONDA" },
  { companynum: 1295, company: "LAMBORGHINI" },
  { companynum: 1296, company: "LANCIA" },
  { companynum: 1104, company: "LAND ROVER" },
  { companynum: 1201, company: "LEXUS" },
  { companynum: 1202, company: "LINCOLN" },
  { companynum: 1297, company: "LOTUS" },
  { companynum: 1298, company: "MACK" },
  { companynum: 1300, company: "MARMON" },
  { companynum: 1301, company: "MASERATI" },
  { companynum: 1353, company: "MAYBACH" },
  { companynum: 1203, company: "MAZDA" },
  { companynum: 1388, company: "MCLAREN" },
  { companynum: 1356, company: "MCLAREN (FORD CAPRI/MUSTANG)" },
  { companynum: 1115, company: "MERCEDES-BENZ" },
  { companynum: 1302, company: "MERCER MOTORS" },
  { companynum: 1204, company: "MERCURY" },
  { companynum: 1205, company: "MERKUR" },
  { companynum: 1303, company: "MESSERSCHMITT" },
  { companynum: 1312, company: "METROPOLITAN (NASH-HUDSON)" },
  { companynum: 1304, company: "MG" },
  { companynum: 1305, company: "MINI" },
  { companynum: 1206, company: "MITSUBISHI" },
  { companynum: 1383, company: "MORETTI" },
  { companynum: 1306, company: "MORGAN" },
  { companynum: 1307, company: "MORRIS" },
  { companynum: 1308, company: "MOTORKRAFT AUTO USA" },
  { companynum: 1309, company: "MUNTZ" },
  { companynum: 1310, company: "NASH" },
  { companynum: 1311, company: "NASH-HEALEY" },
  { companynum: 1313, company: "NEU SPEED AUTOWORKS" },
  { companynum: 1254, company: "NISSAN/DATSUN" },
  { companynum: 1314, company: "NSU" },
  { companynum: 1315, company: "OAKLAND" },
  { companynum: 1134, company: "OLDSMOBILE" },
  { companynum: 1316, company: "OPEL" },
  { companynum: 1384, company: "OSCA" },
  { companynum: 1317, company: "PACKARD" },
  { companynum: 1318, company: "PANOZ" },
  { companynum: 1385, company: "PANTHER" },
  { companynum: 1207, company: "PEUGEOT" },
  { companynum: 1319, company: "PIERCE-ARROW" },
  { companynum: 1320, company: "PININFARINA" },
  { companynum: 1321, company: "PLAYBOY" },
  { companynum: 1142, company: "PLYMOUTH" },
  { companynum: 1143, company: "PONTIAC" },
  { companynum: 1144, company: "PORSCHE" },
  { companynum: 1366, company: "PROWLER (CHRYSLER)" },
  { companynum: 1367, company: "PROWLER (PLYMOUTH)" },
  { companynum: 1322, company: "QVALE AUTOMOTIVE" },
  { companynum: 1323, company: "RAMBLER" },
  { companynum: 1208, company: "RENAULT" },
  { companynum: 1324, company: "REO" },
  { companynum: 1325, company: "RILEY" },
  { companynum: 1352, company: "ROCKNE (STUDEBAKER)" },
  { companynum: 1326, company: "ROLLS-ROYCE" },
  { companynum: 1370, company: "ROUSH PERFORMANCE" },
  { companynum: 1327, company: "ROVER" },
  { companynum: 1410, company: "RUGBY" },
  { companynum: 1209, company: "SAAB" },
  { companynum: 1348, company: "SALEEN" },
  { companynum: 1359, company: "SALEEN SPORTRUCK" },
  { companynum: 1210, company: "SATURN" },
  { companynum: 1328, company: "SCHWARZ" },
  { companynum: 1354, company: "SCION" },
  { companynum: 1329, company: "SHAY" },
  { companynum: 1365, company: "SHELBY AMERICAN" },
  { companynum: 1349, company: "SHELBY AUTOMOBILES" },
  { companynum: 1330, company: "SHELBY AUTOMOBILES INC." },
  { companynum: 1368, company: "SHOGUN (FORD FESTIVA)" },
  { companynum: 1381, company: "SPYKER CARS" },
  { companynum: 1211, company: "STERLING" },
  { companynum: 1333, company: "STUDEBAKER" },
  { companynum: 1334, company: "STUTZ II" },
  { companynum: 1212, company: "SUBARU" },
  { companynum: 1335, company: "SUNBEAM" },
  { companynum: 1213, company: "SUZUKI" },
  { companynum: 1445, company: "SWALLOW" },
  { companynum: 1336, company: "TALBOT-SUNBEAM" },
  { companynum: 1448, company: "TATRA" },
  { companynum: 1337, company: "TERRAPLANE" },
  { companynum: 1382, company: "TESLA MOTORS" },
  { companynum: 1369, company: "TOYOPET-TOYOTA" },
  { companynum: 1214, company: "TOYOTA" },
  { companynum: 1338, company: "TRIUMPH" },
  { companynum: 1339, company: "TUCKER" },
  { companynum: 1340, company: "TVR" },
  { companynum: 1341, company: "VECTOR AEROMOTIVE" },
  { companynum: 1215, company: "VOLKSWAGEN" },
  { companynum: 1216, company: "VOLVO" },
  { companynum: 1342, company: "WHIPPET" },
  { companynum: 1343, company: "WILLYS" },
  { companynum: 1360, company: "WILLYS (AMERICAR)" },
  { companynum: 1361, company: "WILLYS-KNIGHT" },
  { companynum: 1362, company: "WILLYS-MOTORS (KAISER)" },
  { companynum: 1363, company: "WILLYS-OVERLAND" },
  { companynum: 1344, company: "WOODILL" },
  { companynum: 1345, company: "ZIMMER" },
]
