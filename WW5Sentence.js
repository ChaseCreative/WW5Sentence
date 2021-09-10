

var points = 0;
var attempts = 0;
var timeLeft = 20;

var countdown = setInterval(countDownTimer,1000);

function countDownTimer(){
   console.log(sentenceArray[0][0]);
   var latin = sentenceArray[0][0];

   document.getElementById("flex1c").style.color = "red";
   document.getElementById("flex1c").innerHTML = timeleft;
   timeleft -= 1;
   if(timeleft <= 0)  {
    			clearInterval(countdown);
    			document.getElementById("flex1c").innerHTML = "Finis!";
					document.getElementById("flex1c").style.color = "black";

          document.getElementById("flexA").disabled = true;
          document.getElementById("flexB").disabled = true;
          document.getElementById("flexC").disabled = true;
          document.getElementById("flexD").disabled = true;
          document.getElementById("flex1b").onclick = function(){startGame()};
          document.getElementById("flex1b").innerHTML = "Ludamus Iterum!";
          document.getElementById("flex1b").disabled = false;
          attempts++;
          document.getElementById("flex1a").innerHTML = points  + "/" + attempts;


    if (timeleft <= 0 && document.getElementById("flexA").innerHTML == sentenceArray[0][1]){
            document.getElementById("flexA").style.backgroundColor = "red";
            document.getElementById("flexA").innerHTML = latin.italics() + " means: " + sentenceArray[0][1];
          }

    if (timeleft <= 0 && document.getElementById("flexB").innerHTML == sentenceArray[0][1]){
            document.getElementById("flexB").style.backgroundColor = "red";
            document.getElementById("flexB").innerHTML = latin.italics() + " means: " + sentenceArray[0][1];
          }

    if (timeleft <= 0 && document.getElementById("flexC").innerHTML == sentenceArray[0][1]){
      document.getElementById("flexC").style.backgroundColor = "red";
      document.getElementById("flexC").innerHTML = latin.italics() + " means: " + sentenceArray[0][1];
      }

    if(timeleft <= 0 && document.getElementById("flexD").innerHTML == sentenceArray[0][1]){
            document.getElementById("flexD").style.backgroundColor = "red";
            document.getElementById("flexD").innerHTML = latin.italics() + " means: " + sentenceArray[0][1];
      }
  }
}


//This stops the timer and resets it to 15 seconds
function stopTimer() {

  clearInterval(countdown);
  document.getElementById("flex1c").innerHTML = "Timer";
  timeleft = 20;

}

stopTimer();



function myFunc(){
  document.getElementById("flexA").innerHTML = "Wrong!";
}

//INSERT NOUNS HERE AND VERBS ON LINE 474 and LINE 1550 reset(). CONSIDER MOVING VERBS HERE!
const nounList = [["stultum", "stulti", "n","fool","fools"],["magistra", "magistrae", "f", "female teacher","female teachers"],["magister", "magistri", "m", "teacher", "teachers"],["puer", "pueri", "m","boy","boys"],["vir", "viri", "m","man", "men"],["populus", "populi", "m","people", "nations"],["amīca", "amīcae", "f","girl friend","girl friends"],["agricola", "agricolae", "m","farmer","farmers"],["fēmina", "fēminae", "f","woman","women"],["fīlia", "fīliae", "f","daughter","daughters"],["amīcus", "amīci", "m","friend","friends"],["fīlius", "fīlii", "m","son","sons"],["patria", "patriae", "f", "fatherland", "countries"],["puella", "puellae", "f", "girl", "girls"],["poēta", "poētae", "m", "poet", "poets"],["nauta", "nautae", "m", "sailor", "sailors"]];

const nounList2 = [["culpa", "culpae", "f","fault", "faults"],["glōria", "glōriae", "f","glory", "glories"],["adulēscentia", "adulēscentiae", "f","youth", "youths"],["animus", "animi", "m","soul", "high spirits"],["verbum", "verbi", "n","word", "words"],["caelum", "caeli", "n","sky","skies"],["officium", "officii", "n", "duty", "duties"],["perīculum", "perīculi", "n", "danger", "dangers"],["remedium", "remedii", "n", "cure", "cures"],["mora", "morae", "f", "delay", "delays"],["oculus", "oculi", "m", "eye", "eyes"],["bāsium", "bāsii", "n", "kiss", "kisses"],["bellum", "belli", "n", "war", "wars"],["cōnsilium", "cōnsilii", "n", "plan", "plans"],["cura", "curae", "f", "care", "anxieties"],["dōnum", "dōni", "n", "gift", "gifts"],["exitium", "exitii", "n", "destruction", "ruins"],["numerus", "numeri", "m","number","numbers"],["sapientia", "sapientiae", "f","wisdom","wisdoms"],["ager", "agri", "m","field", "fields"],["fama", "famae", "f", "reputation", "rumors"],["forma", "formae", "f", "shape", "forms"],["fortuna", "fortunae", "f", "luck", "fortunes"],["īra", "īrae", "f", "anger", "angers"],["pecūnia", "pecūniae", "f", "money", "monies"],["philosophia", "philosophiae", "f", "philosophy", "philosophies"],["porta", "portae", "f", "gate", "gates"],["rosa", "rosae", "f", "rose", "roses"],["sententia", "sententiae", "f", "opinion", "opinions"],["vita", "vitae", "f", "life", "lives"]];

const nounListFem = [["culpa", "culpae", "f","fault", "faults"],["glōria", "glōriae", "f","glory", "glories"],["adulēscentia", "adulēscentiae", "f","youth", "youths"],["sapientia", "sapientiae", "f","wisdom","wisdoms"],["fama", "famae", "f", "reputation", "rumors"],["forma", "formae", "f", "shape", "forms"],["fortuna", "fortunae", "f", "luck", "fortunes"],["īra", "īrae", "f", "anger", "angers"],["pecūnia", "pecūniae", "f", "money", "monies"],["philosophia", "philosophiae", "f", "philosophy", "philosophies"],["porta", "portae", "f", "gate", "gates"],["rosa", "rosae", "f", "rose", "roses"],["sententia", "sententiae", "f", "opinion", "opinions"],["vita", "vitae", "f", "life", "lives"],["cura", "curae", "f", "care", "anxieties"],["mora", "morae", "f", "delay", "delays"],["magistra", "magistrae", "f", "female teacher","female teachers"],["amīca", "amīcae", "f","girl friend","girl friends"],["fēmina", "fēminae", "f","woman","women"],["fīlia", "fīliae", "f","daughter","daughters"],["patria", "patriae", "f", "fatherland", "countries"],["puella", "puellae", "f", "girl", "girls"]];
var rnlfi = Math.floor(Math.random() * nounListFem.length);

const nounListMas = [["animus", "animi", "m","soul", "high spirits"],["numerus", "numeri", "m","number","numbers"],["ager", "agri", "m","field", "fields"],["oculus", "oculi", "m", "eye", "eyes"],["magister", "magistri", "m", "teacher", "teachers"],["puer", "pueri", "m","boy","boys"],["vir", "viri", "m","man", "men"],["populus", "populi", "m","people", "nations"],["agricola", "agricolae", "m","farmer","farmers"],["amīcus", "amīci", "m","friend","friends"],["fīlius", "fīlii", "m","son","sons"],["poēta", "poētae", "m", "poet", "poets"],["nauta", "nautae", "m", "sailor", "sailors"]];
var rnlmi = Math.floor(Math.random() * nounListMas.length);

const nounListNeut = [["verbum", "verbi", "n","word", "words"],["caelum", "caeli", "n","sky","skies"],["stultum", "stulti", "n","fool","fools"],["officium", "officii", "n", "duty", "duties"],["perīculum", "perīculi", "n", "danger", "dangers"],["remedium", "remedii", "n", "cure", "cures"],["bāsium", "bāsii", "n", "kiss", "kisses"],["bellum", "belli", "n", "war", "wars"],["cōnsilium", "cōnsilii", "n", "plan", "plans"],["dōnum", "dōni", "n", "gift", "gifts"],["exitium", "exitii", "n", "destruction", "ruins"]];
var rnlni = Math.floor(Math.random() * nounListNeut.length);

const verbSum = [["sum","I am"],["es","You are"],["est", "She is"],["est", "He is"],["est", "It is"],["sumus", "We are"],["estis", "Y'all are"],["sunt", "They are"]];
var rvsi = Math.floor(Math.random() * verbSum.length);
  // rest of ch. 4 vocab: ["nihil","nothing"],["iuvo, iuvāre, iuvī, iutum", "to help, aid, assist; please"],["sum, esse, fuī, futurum","to be, exist"]


const adjectiveList = [["bellus", "bella", "bellum","bell","pretty","1"],["bonus", "bona", "bonum","bon","good","1"],["humānus", "humāna", "humānum","human","human","1"],["malus", "mala", "malum","mal","bad", "1"],["parvus", "parva", "parvum", "parv","small", "1"],["stultus", "stulta", "stultum", "stult","foolish","1"],["vērus", "vēra", "vērum", "vēr","true","1"],
["antīquus", "antīqua", "antīquum","antīqu","ancient","1"],["magnus", "magna", "magnum","magn","large","1"],["avārus", "avāra", "avārum","avār","greedy","1"],["Rōmānus", "Rōmāna", "Rōmānum","Rōmān","Roman","1"],["līber", "lībera", "līberum","līber","free","1"],["pulcher", "pulchra", "pulchrum","pulchr","beautiful","1"],["sānus", "sāna", "sānum","sān","sane", "1"]];
var rali = Math.floor(Math.random() * adjectiveList.length);
var ral2i = Math.floor(Math.random() * adjectiveList.length);

//Omitted adverbs
[["crās","tomorrow"],["heri","yesterday"],["quandō","when"],["sī quandō","if ever"],["satis","enough"],["tum","then"],["super","above"]];


const plAdjectiveList = [["paucī", "paucae", "pauca","pauc","few","1"],["multi", "multae", "multa","mult","many","1"]];
const otherAdjectiveList = [["noster", "nostra", "nostrum","nostr","our","1"],["meus", "mea", "meum","me","my","1"],["multus", "multa", "multum","mult","much","1"],["tuus", "tua", "tuum","tu","your","1"]];

const prepAblList = [["sine","without"],["de","about"],["in","on"],["de","down from"],["in","in"]];
var rpali = Math.floor(Math.random() * prepAblList.length);
//let conjunctionList = [["et","and"],["et ... et","both ... and"],["sed","but"]];

const prepAcclList = [["propter","because of"],["propter","on account of"]];
var rpaccli = Math.floor(Math.random() * prepAcclList.length);
//class Adjective at line 92
//class Noun at 440
//class Verb at 855
//class NounAdjective at 1050
//sentenceArray at 2535
//[["bestia","bestiae","f","beast","beasts"],["latrina","latrinae","f","bathroom","bathrooms"],["ianua","ianuae","f","door","doors"],["dominus","domini", "m", "master", "masters"],["puer","pueri", "m", "boy", "boys"],["magister","magistri", "m", "teacher", "teachers"],["amicus","amici", "m", "friend", "friends"],["coquus","coqui", "m", "cook", "cooks"],["filius","filii", "m","son","sons"],["servus","servi","m","slave","slaves"],["uxor","uxoris","f","wife","wives"],["frater","fratris","m","brother","brothers"],["hospes","hospitis", "m","guest","guests"],["corpus","corporis", "n","body","bodies"],["vulnus","vulneris", "n","wound","wounds"],["manus","manus", "f","hand","hands"],["senatus","senatus", "m","senate","senates"],["dies","diei", "m","day","days"],["res","rei", "f","thing","things"]];

class Adjective {
  constructor (masNom,femNom,neutNom,stem,meaning,declension){
  this.masNom = masNom;
  this.femNom = femNom;
  this.neutNom = neutNom;
  this.stem = stem;
  this.meaning = meaning;
  this.declension = declension;
  }

  get nominativeSingMas(){
    return this.masNom;
  }

  get nominativeSingFem(){
    return this.femNom;
  }

  get nominativeSingNeut(){
    return this.neutNom;
  }


  get genitiveSingMas(){
    if (this.declension ==  "1"){
      return this.stem + "ī";
    } else if (this.declension ==  "3"){
      return this.stem + "is";
    }
  }


  get genitiveSingFem(){
    if (this.declension ==  "1"){
      return this.stem + "ae";
    } else if (this.declension ==  "3"){
      return this.stem + "is";
    }
  }

  get genitiveSingNeut(){
    if (this.declension ==  "1"){
      return this.stem + "ī";
    } else if (this.declension ==  "3"){
      return this.stem + "is";
    }
  }

  get dativeSingMas(){
    if (this.declension ==  "1"){
      return this.stem + "ō";
    } else if (this.declension ==  "3"){
      return this.stem + "ī";
    }
  }


  get dativeSingFem(){
    if (this.declension ==  "1"){
      return this.stem + "ae";
    } else if (this.declension ==  "3"){
      return this.stem + "ī";
    }
  }

  get dativeSingNeut(){
    if (this.declension ==  "1"){
      return this.stem + "ō";
    } else if (this.declension ==  "3"){
      return this.stem + "ī";
    }
  }

  get accusativeSingMas(){
    if (this.declension ==  "1"){
      return this.stem + "um";
    } else if (this.declension ==  "3"){
      return this.stem + "em";
    }
  }


  get accusativeSingFem(){
    if (this.declension ==  "1"){
      return this.stem + "am";
    } else if (this.declension ==  "3"){
      return this.stem + "em";
    }
  }

  get accusativeSingNeut(){
    if (this.declension ==  "1"){
      return this.neutNom;
    } else if (this.declension ==  "3"){
      return this.neutNom;
    }
  }

  get ablativeSingMas(){
    if (this.declension ==  "1"){
      return this.stem + "ō";
    } else if (this.declension ==  "3"){
      return this.stem + "ī";
    }
  }


  get ablativeSingFem(){
    if (this.declension ==  "1"){
      return this.stem + "ā";
    } else if (this.declension ==  "3"){
      return this.stem + "ī";
    }
  }

  get ablativeSingNeut(){
    if (this.declension ==  "1"){
      return this.stem + "ō";
    } else if (this.declension ==  "3"){
      return this.stem + "ī";
    }
  }

  get vocativeSingMas(){
    if (this.declension ==  "1"){
      if (this.masNom.slice(-2,)== "us"){
        return this.stem + "e";
        } else {
        return this.masNom;
        }
    } else if (this.declension ==  "3"){
      return this.masNom;
    }
  }


  get vocativeSingFem(){
    return this.femNom;
  }

  get vocativeSingNeut(){
    return this.neutNom;
  }





  //Plural adjective forms

  get nominativePlMas(){
    if (this.declension ==  "1"){
      return this.stem + "ī";
    } else if (this.declension ==  "3"){
      return this.stem + "ēs";
    }
  }

  get nominativePlFem(){
    if (this.declension ==  "1"){
      return this.stem + "ae";
    } else if (this.declension ==  "3"){
      return this.stem + "ēs";
    }
  }

  get nominativePlNeut(){
    if (this.declension ==  "1"){
      return this.stem + "a";
    } else if (this.declension ==  "3"){
      return this.stem + "īa";
    }
  }


  get genitivePlMas(){
    if (this.declension ==  "1"){
      return this.stem + "ōrum";
    } else if (this.declension ==  "3"){
      return this.stem + "ium";
    }
  }


  get genitivePlFem(){
    if (this.declension ==  "1"){
      return this.stem + "ārum";
    } else if (this.declension ==  "3"){
      return this.stem + "ium";
    }
  }

  get genitivePlNeut(){
    if (this.declension ==  "1"){
      return this.stem + "ōrum";
    } else if (this.declension ==  "3"){
      return this.stem + "ium";
    }
  }

  get dativePlMas(){
    if (this.declension ==  "1"){
      return this.stem + "īs";
    } else if (this.declension ==  "3"){
      return this.stem + "ibus";
    }
  }


  get dativePlFem(){
    if (this.declension ==  "1"){
      return this.stem + "īs";
    } else if (this.declension ==  "3"){
      return this.stem + "ibus";
    }
  }

  get dativePlNeut(){
    if (this.declension ==  "1"){
      return this.stem + "īs";
    } else if (this.declension ==  "3"){
      return this.stem + "ibus";
    }
  }

  get accusativePlMas(){
    if (this.declension ==  "1"){
      return this.stem + "ōs";
    } else if (this.declension ==  "3"){
      return this.stem + "ēs";
    }
  }


  get accusativePlFem(){
    if (this.declension ==  "1"){
      return this.stem + "ās";
    } else if (this.declension ==  "3"){
      return this.stem + "ēs";
    }
  }

  get accusativePlNeut(){
    if (this.declension ==  "1"){
      return this.stem + "a";
    } else if (this.declension ==  "3"){
      return this.stem + "ia";
    }
  }

  get ablativePlMas(){
    if (this.declension ==  "1"){
      return this.stem + "īs";
    } else if (this.declension ==  "3"){
      return this.stem + "ibus";
    }
  }


  get ablativePlFem(){
    if (this.declension ==  "1"){
      return this.stem + "īs";
    } else if (this.declension ==  "3"){
      return this.stem + "ibus";
    }
  }

  get ablativePlNeut(){
    if (this.declension ==  "1"){
      return this.stem + "īs";
    } else if (this.declension ==  "3"){
      return this.stem + "ibus";
    }
  }

  get vocativePlMas(){
    if (this.declension ==  "1"){
      return this.stem + "ī";
    } else if (this.declension ==  "3"){
      return this.stem + "ēs";
    }
  }


  get vocativePlFem(){
    if (this.declension ==  "1"){
      return this.stem + "ae";
    } else if (this.declension ==  "3"){
      return this.stem + "ēs";
    }
  }

  get vocativePlNeut(){
    if (this.declension ==  "1"){
      return this.stem + "a";
    } else if (this.declension ==  "3"){
      return this.stem + "īa";
    }
  }


  get vocativePlMas(){
    if (this.declension ==  "1"){
      return this.stem + "ī";
    } else if (this.declension ==  "3"){
      return this.stem + "ēs";
    }
  }


  get vocativePlFem(){
    if (this.declension ==  "1"){
      return this.stem + "ae";
    } else if (this.declension ==  "3"){
      return this.stem + "ēs";
    }
  }

  get vocativePlNeut(){
    if (this.declension ==  "1"){
      return this.stem + "a";
    } else if (this.declension ==  "3"){
      return this.stem + "īa";
    }
  }

  //Adjective translation
  get adjTrans(){
    return this.meaning;
  }


  get vocativeTrans(){
    let vocative = this.meaning;
    return vocative[0].toUpperCase() + vocative.substring(1);
  }
}

//this randomizes the adjectiveList data
var rai = Math.floor(Math.random() * adjectiveList.length);
var myAdjective = new Adjective(adjectiveList[rai][0],adjectiveList[rai][1],adjectiveList[rai][2],adjectiveList[rai][3],adjectiveList[rai][4],adjectiveList[rai][5]);




class Noun {
  constructor(nominative, genitive, gender, singMeaning, plMeaning){
    this.nominative = nominative;
    this.genitive = genitive;
    this.gender = gender;
    this.singMeaning = singMeaning;
    this.plMeaning = plMeaning;
  }

  //NOMINATIVE

  get nominativeSing(){
    return this.singNominative();
  }

  singNominative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.nominative;
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.nominative;
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.nominative;
        } else {
          return this.nominative;
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.nominative;
    }
  }

  get nominativeSingTrans(){
    return this.singNominativeTrans();
  }

  singNominativeTrans(){
    return "The " + this.singMeaning;
  }

    //GENITIVE

  get genitiveSing(){
      return this.singGenitive();
  }

  singGenitive(){
    if (this.genitive.slice(-2,) == "ae"){
        return this.genitive;
    } else if (this.genitive.slice(-2,) == "ei"){
        return this.genitive.slice(0,-2) + "ēī";
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "ī";
    } else if (this.genitive.slice(-2,) == "is"){
        return this.genitive;
    } else if (this.genitive.slice(-2,) == "us"){
        return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get genitiveSingTrans(){
      return this.singGenitiveTrans();
  }

  singGenitiveTrans(){
      return " of the " + this.singMeaning;
  }

    //DATIVE

  get dativeSing(){
      return this.singDative();
  }

  singDative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive;
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēī";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "ō";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ī";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūi";
    }
  }

  get dativeSingTrans(){
    return this.singDativeTrans();
  }

  singDativeTrans(){
    return " to the " + this.singMeaning;
  }

  //ACCUSATIVE

  get accusativeSing(){
    return this.singAccusative();
  }

  singAccusative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "am";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "em";
    } else if (this.gender == "n" && this.genitive.slice(-1,) == "i"){
      return this.nominative;
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "um";
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.nominative;
        } else {
          return this.genitive.slice(0,-2) + "em";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "um";
    }
  }

  get accusativeSingTrans(){
    return this.singAccusativeTrans();
  }

  singAccusativeTrans(){
      return " the " + this.singMeaning;
  }

  //ablative

  get ablativeSing(){
    return this.singAblative();
  }

  singAblative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ā";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ē";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "ō";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "e";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ū";
    }
  }

  get ablativeSingTrans(){
    return this.singAblativeTrans();
  }

  singAblativeTrans(){
    return " the " + this.singMeaning;
  }

  //Vocative
  get vocativeSing(){
    let vocative = this.singVocative();
    return vocative[0].toUpperCase() + vocative.substring(1);
  }

  singVocative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.nominative;
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.nominative;
      } else if (this.gender == "m"){
          if (this.nominative.slice(-3,) == "ius"){
            return this.genitive.slice(0,-1);
          } else if (this.nominative.slice(-2,) == "us"){
            return this.genitive.slice(0,-1) + "e";
          } else {
            return this.nominative;
          }
      }
    } else if (this.genitive.slice(-2,) == "is"){
        return this.nominative;
    } else if (this.genitive.slice(-2,) == "us"){
      return this.nominative;
    }
  }

  get vocativeSingTrans(){
    return this.singVocativeTrans();
  }

  singVocativeTrans(){
      let vocative = this.singMeaning;
      return vocative[0].toUpperCase() + vocative.substring(1);
    }


  //NOMINATIVE PLURAL

  get nominativePl(){
    return this.plNominative();
  }

  plNominative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ae";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a";
      } else {
        return this.genitive.slice(0,-1) + "ī";
      }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.genitive.slice(0,-2) + "a";
        } else {
          return this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get nominativePlTrans(){
    return this.plNominativeTrans();
  }

  plNominativeTrans(){
    return "The " + this.plMeaning;
  }

    //GENITIVE

  get genitivePl(){
      return this.plGenitive();
  }

  plGenitive(){
    if (this.genitive.slice(-2,) == "ae"){
        return this.genitive.slice(0,-2) + "ārum";
    } else if (this.genitive.slice(-2,) == "ei"){
        return this.genitive.slice(0,-2) + "ērum";
    } else if (this.genitive.slice(-1,) == "i"){
        return this.genitive.slice(0,-1) + "ōrum";
    } else if (this.genitive.slice(-2,) == "is"){
        return this.genitive.slice(0,-2) + "um"
    } else if (this.genitive.slice(-2,) == "us"){
        return this.genitive.slice(0,-2) + "ōrum";
    }
  }

  get genitivePlTrans(){
      return this.plGenitiveTrans();
  }

  plGenitiveTrans(){
      return " of the " + this.plMeaning;
  }

    //DATIVE

  get dativePl(){
      return this.plDative();
  }

  plDative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "īs";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēbus";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "īs";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ibus";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ibus";
    }
  }

  get dativePlTrans(){
    return this.plDativeTrans();
  }

  plDativeTrans(){
    return " to the " + this.plMeaning;
  }

  //ACCUSATIVE

  get accusativePl(){
    return this.plAccusative();
  }

  plAccusative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ās";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a";
      } else {
        return this.genitive.slice(0,-1) + "ōs";
      }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.genitive.slice(0,-2) + "a";
        } else {
          return this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get accusativePlTrans(){
    return this.plAccusativeTrans();
  }

  plAccusativeTrans(){
      return " the " + this.plMeaning;
  }

  //ablative

  get ablativePl(){
    return this.plAblative();
  }

  plAblative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "īs";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēbus";
    } else if (this.genitive.slice(-1,) == "i"){
      return this.genitive.slice(0,-1) + "īs";
    } else if (this.genitive.slice(-2,) == "is"){
      return this.genitive.slice(0,-2) + "ibus";
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ibus";
    }
  }

  get ablativePlTrans(){
    return this.plAblativeTrans();
  }

  plAblativeTrans(){
    return " the " + this.plMeaning;
  }

  //Vocative Plural

  get vocativePl(){
    let vocative = this.plVocative();
    console.log(vocative);
    console.log(vocative[0].toUpperCase() + vocative.substring(1));

    return vocative[0].toUpperCase() + vocative.substring(1);

  }

  plVocative(){
    if (this.genitive.slice(-2,) == "ae"){
      return this.genitive.slice(0,-2) + "ae";
    } else if (this.genitive.slice(-2,) == "ei"){
      return this.genitive.slice(0,-2) + "ēs";
    } else if (this.genitive.slice(-1,) == "i"){
      if (this.gender == "n"){
        return this.genitive.slice(0,-1) + "a";
      } else {
        return this.genitive.slice(0,-1) + "ī";
      }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "n"){
          return this.genitive.slice(0,-2) + "a";
        } else {
          return this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-2,) == "us"){
      return this.genitive.slice(0,-2) + "ūs";
    }
  }

  get vocativePlTrans(){
    return this.plVocativeTrans();
  }

  plVocativeTrans(){
    let vocative = this.plMeaning;
    return vocative[0].toUpperCase() + vocative.substring(1);
  }

}

//VerbTemplate

//infinitives in 2nd: ēre and 3r-io: êre
let verbList = [["iuvo", "iuvare", "iuvi", "iutus", "help", "helping", "helped", "helped"],["amo", "amare", "amavi","amatus", "love", "loving", "loved", "loved"],["laudo", "laudare", "laudavi","laudatus", "praise", "praising", "praised", "praised"],["observo", "observare", "observavi","observatus", "observe", "observing", "observed", "observed"],["moneo", "monēre", "monui","monitus", "warn", "warning", "warned", "advised"],["terreo", "terrēre", "terrui","territus", "frighten", "frightening", "terrified", "frightened"],["servo", "servare", "servavi","servatus", "guard", "saving", "kept", "preserved"],["conservo", "conservare", "conservavi","conservatus", "preserve", "conserving", "maintained", "preserved"],["voco", "vocare", "vocavi","vocatus", "call", "summoning", "called", "summoned"],["video", "vidēre", "vīdi","visus", "see", "seeing", "saw", "seen"],["habeō", "habēre", "habui", "habitus","hold","having","had","held"],["satiō", "satiare", "satiāvi", "satiātus","satiate","satisfying","satisfied","satisfied"],["culpo", "culpare", "culpāvì", "culpātus","blame", "blaming", "blamed","blamed"],["supero", "superare", "superāvi", "superātus","conquer", "conquering","conquered","conquered"]];


let intransVerbList = [["cogito", "cogitare", "cogitavi","cogitatus", "think", "thinking", "thought", "thought"],["erro", "errare", "erravi","erratus", "err", "mistaking", "mistook", "mistaken"],["debeo", "debēre", "debui","debitus", "owe", "owing", "owed", "ought"],["cēno", "cēnare", "cēnāvi", "cēnātus","dine","dining","dined","dined"],["remaneo", "remanēre", "remansi", "remansurus","remain", "staying behind", "remained", "remained"],["maneo", "manēre", "mansi", "mansurum","remain", "staying behind", "remained", "remained"]];

/*
[["amo", "amare", "amavi","amatus", "love", "loving", "loved", "loved"],["cogito", "cogitare", "cogitavi","cogitatus", "think", "thinking", "thought", "thought"],["debeo", "debēre", "debui","debitus", "owe", "owed", "owed", "ought"],["moneo", "monēre", "monui","monitus", "warn", "warning", "warned", "advised"],["terreo", "terrēre", "terrui","territus", "frighten", "frightening", "terrified", "frightened"],["erro", "errare", "erravi","erratus", "mistake", "mistaking", "mistook", "mistaken"],["servo", "servare", "servavi","servatus", "guard", "saving", "kept", "preserved"],["conservo", "conservare", "conservavi","conservatus", "preserve", "conserving", "maintained", "preserved"],["voco", "vocare", "vocavi","vocatus", "call", "summoning", "called", "summoned"],["pulso", "pulsare", "pulsavi","pulsatus", "strike", "striking", "struck", "struck"],["do", "dare", "dēdi","datus", "give", "giving", "gave", "given"],
["video", "vidēre", "vīdi","visus", "see", "seeing", "saw", "seen"],["duco", "ducere", "duxi","ductus", "lead", "leading", "led", "led"],
["capio", "capere", "cēpi","captus", "capture", "capturing", "captured", "captured"],["audio", "audire", "audivi","auditus", "hear", "hearing", "heard", "heard"],["facio", "facere", "fēci","factus", "make", "making", "made", "made"]];
*/

//const verbList = [["capio", "capere", "cēpi","captus", "capture", "capturing", "captured", "captured"],["duco", "ducere", "duxi","ductus", "lead", "leading", "led", "led"],["facio", "facere", "fēci","factus", "make", "making", "made", "made"]];



class Verb {
  constructor(first, second, third, fourth, verb, verbing, verbed,ppVerb){
  this.first = first;
  this.second = second;
  this.third = third;
  this.fourth = fourth;
  this.verb = verb;
  this.verbing = verbing;
  this.verbed = verbed;
  this.ppVerb = ppVerb;
  }

  //PRESENT ACTIVE INFINITIVE

  get actInfPres(){
    return this.presActInf();
  }

  presActInf(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āre";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second;
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second;
    } else if (this.second.slice(-3,) == "ere"){
      return this.second;
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īre";
    }
  }

  get actInfPresTrans(){
    return this.presActInfTrans();
  }

  presActInfTrans(){
    return " to " +  this.verb;
  }

  //SINGULAR IMPERATIVE

  get imperativeSing(){
    return this.singImperative();
  }

  singImperative(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ā";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ē";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      if (this.second == "facere"){
        return "fac";
      } else {
      return this.second.slice(0,-3) + "e";
      }
    } else if (this.second.slice(-3,) == "ere"){
        if (this.second == "ducere"){
          return "duc";
        } else if (this.second == "dicere"){
          return "dic";
        } else {
          return this.second.slice(0,-3) + "e";
        }
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "ī";
    }
  }

  get imperativeSingTrans(){
    return this.verb;
  }

  singImperativeTrans(){
    return this.imperativeSingTrans();
  }

  //PLURAL IMPERATIVE

  get imperativePl(){
    return this.plImperative();
  }

  plImperative(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āte";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēte";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ite";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ite";
    } else if(this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īte";
    }
  }

  get imperativePlTrans(){
    return this.verb;
  }

  plImperativeTrans(){
    return this.imperativePlTrans();
  }




  //PRESENT TENSE
  get firstSingPres(){
    return this.presFirstSing();
  }

  presFirstSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ō";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "eō";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iō";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ō";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iō";
    }
  }



  get firstSingPresTrans(){
    return this.presFirstSingTrans();
  }

  presFirstSingTrans(){
    return "I " +  this.verb;
  }

  get secondSingPres(){
    return this.presSecondSing();
  }

  presSecondSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ās";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēs";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "is";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "is";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īs";
    }
  }

  get secondSingPresTrans(){
    return this.presSecondSingTrans();
  }

  presSecondSingTrans(){
    return "You " +  this.verb;
  }

  get thirdSingPres(){
    return this.presThirdSing();
  }

  presThirdSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "at";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "et";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "it";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "it";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "it";
    }
  }

  get thirdSingPresTrans(){
    return this.presThirdSingTrans();
  }

  presThirdSingTrans(){
    return "He " +  this.verb + "s";
  }

  get thirdSingPresTrans2(){
    return this.presThirdSingTrans2();
  }

  presThirdSingTrans2(){
    return this.verb + "s";
  }

  get firstPlPres(){
    return this.presFirstPl();
  }

  presFirstPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "āmus";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēmus";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "imus";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "imus";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īmus";
    }
  }

  get firstPlPresTrans(){
    return this.presFirstPlTrans();
  }

  presFirstPlTrans(){
    return "We " +  this.verb;
  }

  get secondPlPres(){
    return this.presSecondPl();
  }

  presSecondPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ātis";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ētis";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "itis";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "itis";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "ītis";
    }
  }

  get secondPlPresTrans(){
    return this.presSecondPlTrans();
  }

  presSecondPlTrans(){
    return "Y'all " +  this.verb;
  }


  get thirdPlPres(){
    return this.presThirdPl();
  }

  presThirdPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ant";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ent";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iunt";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "unt";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "īunt";
    }
  }

  get thirdPlPresTrans(){
    return this.presThirdPlTrans();
  }

  presThirdPlTrans(){
    return "They " +  this.verb;
  }

  get thirdPlPresTrans2(){
    return this.presThirdPlTrans2();
  }

  presThirdPlTrans2(){
    return this.verb;
  }

//imperfect

  get firstSingImp(){
   return this.impFirstSing();
 }

  impFirstSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābam";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbam";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbam";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbam";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbam";
    }
  }



  get firstSingImpTrans(){
    return this.impFirstSingTrans();
  }

  impFirstSingTrans(){
    return "I used to " +  this.verb;
  }

  get secondSingImp(){
    return this.impSecondSing();
  }

  impSecondSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābās";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbās";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbās";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbās";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbās";
    }
  }

  get secondSingImpTrans(){
    return this.impSecondSingTrans();
  }

  impSecondSingTrans(){
    return "You were " +  this.verbing;
  }

  get thirdSingImp(){
    return this.impThirdSing();
  }

  impThirdSing(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "abat";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbat";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbat";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbat";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbat";
    }
  }

  get thirdSingImpTrans(){
    return this.impThirdSingTrans();
  }

  impThirdSingTrans(){
    return "She kept " +  this.verbing;
  }

  get thirdSingImpTrans2(){
    return this.impThirdSingTrans2();
  }

  impThirdSingTrans2(){
    return "kept " +  this.verbing;
  }

  get firstPlImp(){
    return this.impFirstPl();
  }

  impFirstPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābāmus";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbāmus";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbāmus";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbāmus";

    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbāmus";
    }
  }

  get firstPlImpTrans(){
    return this.impFirstPlTrans();
  }

  impFirstPlTrans(){
    return "We used to " +  this.verb;
  }

  get secondPlImp(){
    return this.impSecondPl();
  }

  impSecondPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "ābātis";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbātis";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbātis";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbātis";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbātis";
    }
  }

  get secondPlImpTrans(){
    return this.impSecondPlTrans();
  }

  impSecondPlTrans(){
    return "Y'all were " +  this.verbing;
  }


  get thirdPlImp(){
    return this.impThirdPl();
  }

  impThirdPl(){
    if (this.second.slice(-3,) == "are"){
      return this.second.slice(0,-3) + "abant";
    } else if (this.second.slice(-3,) == "ēre"){
      return this.second.slice(0,-3) + "ēbant";
    } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "iēbant";
    } else if (this.second.slice(-3,) == "ere"){
      return this.second.slice(0,-3) + "ēbant";
    } else if (this.second.slice(-3,) == "ire"){
      return this.second.slice(0,-3) + "iēbant";
    }
  }

  get thirdPlImpTrans(){
    return this.impThirdPlTrans();
  }

  impThirdPlTrans(){
    return "They were " +  this.verbing;
  }

  get thirdPlImpTrans2(){
    return this.impThirdPlTrans2();
  }

  impThirdPlTrans2(){
    return "were " +  this.verbing;
  }

  //future tense

    get firstSingFut(){
     return this.futFirstSing();
   }

    futFirstSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābō";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbō";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iam";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "am";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iam";
      }
    }



    get firstSingFutTrans(){
      return this.futFirstSingTrans();
    }

    futFirstSingTrans(){
      return "I will " +  this.verb;
    }

    get secondSingFut(){
      return this.futSecondSing();
    }

    futSecondSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābis";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbis";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iēs";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ēs";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iēs";
      }
    }

    get secondSingFutTrans(){
      return this.futSecondSingTrans();
    }

    futSecondSingTrans(){
      return "You will " +  this.verb;
    }

    get thirdSingFut(){
      return this.futThirdSing();
    }

    futThirdSing(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābit";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbit";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iet";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "et";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iet";
      }
    }

    get thirdSingFutTrans(){
      return this.futThirdSingTrans();
    }

    futThirdSingTrans(){
      return "It will " +  this.verb;
    }

    get thirdSingFutTrans2(){
      return this.futThirdSingTrans2();
    }

    futThirdSingTrans2(){
      return "will " +  this.verb;
    }

    get firstPlFut(){
      return this.futFirstPl();
    }

    futFirstPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābimus";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbimus";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iēmus";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ēmus";

      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iēmus";
      }
    }

    get firstPlFutTrans(){
      return this.futFirstPlTrans();
    }

    futFirstPlTrans(){
      return "We will " +  this.verb;
    }

    get secondPlFut(){
      return this.futSecondPl();
    }

    futSecondPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābitis";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbitis";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "iētis";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ētis";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "iētis";
      }
    }

    get secondPlFutTrans(){
      return this.futSecondPlTrans();
    }

    futSecondPlTrans(){
      return "Y'all will " +  this.verb;
    }


    get thirdPlFut(){
      return this.futThirdPl();
    }

    futThirdPl(){
      if (this.second.slice(-3,) == "are"){
        return this.second.slice(0,-3) + "ābunt";
      } else if (this.second.slice(-3,) == "ēre"){
        return this.second.slice(0,-3) + "ēbunt";
      } else if (this.first.slice(-2,) == "io" && this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ient";
      } else if (this.second.slice(-3,) == "ere"){
        return this.second.slice(0,-3) + "ent";
      } else if (this.second.slice(-3,) == "ire"){
        return this.second.slice(0,-3) + "ient";
      }
    }

    get thirdPlFutTrans(){
      return this.futThirdPlTrans();
    }

    futThirdPlTrans(){
      return "They will " +  this.verb;
    }

    get thirdPlFutTrans2(){
      return this.futThirdPlTrans2();
    }

    futThirdPlTrans2(){
      return "will " +  this.verb;
    }

   //PERFECT tense

   get firstSingPer(){
    return this.perFirstSing();
  }

   perFirstSing(){
     return this.third.slice(0,-1) + "ī";
   }

   get firstSingPerTrans(){
     return this.perFirstSingTrans();
   }

   perFirstSingTrans(){
     return "I " +  this.verbed;
   }

   get secondSingPer(){
    return this.perSecondSing();
  }

   perSecondSing(){
     return this.third.slice(0,-1) + "istī";
   }

   get secondSingPerTrans(){
     return this.perSecondSingTrans();
   }

   perSecondSingTrans(){
     return "You " +  this.verbed;
   }

   get thirdSingPer(){
    return this.perThirdSing();
  }

   perThirdSing(){
     return this.third.slice(0,-1) + "it";
   }

   get thirdSingPerTrans(){
     return this.perThirdSingTrans();
   }

   perThirdSingTrans(){
     return "She " +  this.verbed;
   }

   get thirdSingPerTrans2(){
     return this.perThirdSingTrans2();
   }

   perThirdSingTrans2(){
     return this.verbed;
   }

   get firstPlPer(){
    return this.perFirstPl();
  }

   perFirstPl(){
     return this.third.slice(0,-1) + "imus";
   }

   get firstPlPerTrans(){
     return this.perFirstPlTrans();
   }

   perFirstPlTrans(){
     return "We " +  this.verbed;
   }

   get secondPlPer(){
    return this.perSecondPl();
  }

   perSecondPl(){
     return this.third.slice(0,-1) + "istis";
   }

   get secondPlPerTrans(){
     return this.perSecondPlTrans();
   }

   perSecondPlTrans(){
     return "Y'all " +  this.verbed;
   }

   get thirdPlPer(){
    return this.perThirdPl();
  }

   perThirdPl(){
     return this.third.slice(0,-1) + "ērunt";
   }

   get thirdPlPerTrans(){
     return this.perThirdPlTrans();
   }

   perThirdPlTrans(){
     return "They " +  this.verbed;
   }

   get thirdPlPerTrans2(){
     return this.perThirdPlTrans2();
   }

   perThirdPlTrans2(){
     return this.verbed;
   }

   //PLUPERFECT getElementsByName

   get firstSingPlu(){
    return this.pluFirstSing();
  }

   pluFirstSing(){
     return this.third.slice(0,-1) + "eram";
   }

   get firstSingPluTrans(){
     return this.pluFirstSingTrans();
   }

   pluFirstSingTrans(){
     return "I had " +  this.ppVerb;
   }

   get secondSingPlu(){
    return this.pluSecondSing();
  }

   pluSecondSing(){
     return this.third.slice(0,-1) + "eras";
   }

   get secondSingPluTrans(){
     return this.pluSecondSingTrans();
   }

   pluSecondSingTrans(){
     return "You had " +  this.ppVerb;
   }

   get thirdSingPlu(){
    return this.pluThirdSing();
  }

   pluThirdSing(){
     return this.third.slice(0,-1) + "erat";
   }

   get thirdSingPluTrans(){
     return this.pluThirdSingTrans();
   }

   pluThirdSingTrans(){
     return "She had " +  this.ppVerb;
   }

   get thirdSingPluTrans2(){
     return this.pluThirdSingTrans2();
   }

   pluThirdSingTrans2(){
     return "had " +  this.ppVerb;
   }

   get firstPlPlu(){
    return this.pluFirstPl();
  }

   pluFirstPl(){
     return this.third.slice(0,-1) + "eramus";
   }

   get firstPlPluTrans(){
     return this.pluFirstPlTrans();
   }

   pluFirstPlTrans(){
     return "We had " +  this.ppVerb;
   }

   get secondPlPlu(){
    return this.pluSecondPl();
  }

   pluSecondPl(){
     return this.third.slice(0,-1) + "eratis";
   }

   get secondPlPluTrans(){
     return this.pluSecondPlTrans();
   }

   pluSecondPlTrans(){
     return "Y'all had " +  this.ppVerb;
   }

   get thirdPlPlu(){
    return this.pluThirdPl();
  }

   pluThirdPl(){
     return this.third.slice(0,-1) + "erant";
   }

   get thirdPlPluTrans(){
     return this.pluThirdPlTrans();
   }

   pluThirdPlTrans(){
     return "They had " +  this.ppVerb;
   }

   get thirdPlPluTrans2(){
     return this.pluThirdPlTrans2();
   }

   pluThirdPlTrans2(){
     return "had " +  this.ppVerb;
   }

   //FUTURE PERFECT

   get firstSingFutPer(){
    return this.futPerFirstSing();
  }

   futPerFirstSing(){
     return this.third.slice(0,-1) + "ero";
   }

   get firstSingFutPerTrans(){
     return this.futPerFirstSingTrans();
   }

   futPerFirstSingTrans(){
     return "I will have " +  this.verbed;
   }

   get secondSingFutPer(){
    return this.futPerSecondSing();
  }

   futPerSecondSing(){
     return this.third.slice(0,-1) + "eris";
   }

   get secondSingFutPerTrans(){
     return this.futPerSecondSingTrans();
   }

   futPerSecondSingTrans(){
     return "You will have " +  this.ppVerb;
   }

   get thirdSingFutPer(){
    return this.futPerThirdSing();
  }

   futPerThirdSing(){
     return this.third.slice(0,-1) + "erit";
   }

   get thirdSingFutPerTrans(){
     return this.futPerThirdSingTrans();
   }

   futPerThirdSingTrans(){
     return "It will have " +  this.ppVerb;
   }

   get thirdSingFutPerTrans2(){
     return this.futPerThirdSingTrans2();
   }

   futPerThirdSingTrans2(){
     return "will have " +  this.ppVerb;
   }

   get firstPlFutPer(){
    return this.futPerFirstPl();
  }

   futPerFirstPl(){
     return this.third.slice(0,-1) + "erimus";
   }

   get firstPlFutPerTrans(){
     return this.futPerFirstPlTrans();
   }

   futPerFirstPlTrans(){
     return "We will have " +  this.ppVerb;
   }

   get secondPlFutPer(){
    return this.futPerSecondPl();
  }

   futPerSecondPl(){
     return this.third.slice(0,-1) + "eritis";
   }

   get secondPlFutPerTrans(){
     return this.futPerSecondPlTrans();
   }

   futPerSecondPlTrans(){
     return "Y'all will have " +  this.ppVerb;
   }

   get thirdPlFutPer(){
    return this.futPerThirdPl();
  }

   futPerThirdPl(){
     return this.third.slice(0,-1) + "erint";
   }

   get thirdPlFutPerTrans(){
     return this.futPerThirdPlTrans();
   }

   futPerThirdPlTrans(){
     return "They will have " +  this.ppVerb;
   }

   get thirdPlFutPerTrans2(){
     return this.futPerThirdPlTrans2();
   }

   futPerThirdPlTrans2(){
     return "will have " +  this.ppVerb;
   }



}

//Class NounAdjective inserts noun and adjective combination

class NounAdjective {
  constructor (nominative, genitive, gender, singMeaning, plMeaning){
    this.nominative = nominative;
    this.genitive = genitive;
    this.gender = gender;
    this.singMeaning = singMeaning;
    this.plMeaning = plMeaning;
  }

  //NOMINATIVE

  get nominativeSing(){
    return this.singNominative();
  }

  singNominative(){
    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
      return myAdjective.femNom + " " + this.nominative;
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
      return myAdjective.masNom + " " + this.nominative;
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.masNom + " " + this.genitive.slice(0,-2) + "ēs";
        } else if (this.gender == "f"){
          return myAdjective.femNom + " " + this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-1,) == "i"){
        if (this.gender == "n"){
          return myAdjective.neutNom + " " + this.nominative;
        } else {
          return myAdjective.masNom + " " + this.nominative;
        }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.masNom + " " + this.nominative;
        } else if (this.gender == "f"){
          return myAdjective.femNom + " " + this.nominative;
        } else if (this.gender == "n"){
          return myAdjective.neutNom + " " + this.nominative;
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.masNom + " " + this.nominative;
        } else if (this.gender == "f"){
          return myAdjective.femNom + " " + this.nominative;
        }
      }
    }

  get nominativeSingTrans(){
      return this.singNominativeTrans();
  }

  singNominativeTrans(){
    return myAdjective.meaning + " " + this.singMeaning;
  }

    //GENITIVE

  get genitiveSing(){
      return this.singGenitive();
  }

  singGenitive(){

    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
        return myAdjective.genitiveSingFem + " " + this.genitive;
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
        return myAdjective.genitiveSingMas + " " + this.genitive;
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.genitiveSingMas + " " + this.genitive.slice(0,-2) + "ēī";
        } else if (this.gender == "f"){
          return myAdjective.genitiveSingFem + " " + this.genitive.slice(0,-2) + "ēī";
        }
    } else if (this.genitive.slice(-1,) == "i"){
        return myAdjective.genitiveSingMas + " " + this.genitive.slice(0,-1) + "ī";
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.genitiveSingMas + " " + this.genitive;
        } else if (this.gender == "f"){
          return myAdjective.genitiveSingFem + " " + this.genitive;
        } else if (this.gender == "n"){
          return myAdjective.genitiveSingNeut + " " + this.genitive;
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.genitiveSingMas + " " + this.genitive.slice(0,-2) + "ūs";
        } else if (this.gender == "f"){
          return myAdjective.genitiveSingFem + " " + this.genitive.slice(0,-2) + "ūs";
        }
      }
  }

  get genitiveSingTrans(){
      return this.singGenitiveTrans();
  }

  singGenitiveTrans(){
      return " of the " + myAdjective.adjTrans + " " + this.singMeaning;
  }

    //DATIVE

  get dativeSing(){
      return this.singDative();
  }

  singDative(){

    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
        return myAdjective.dativeSingFem + " " + this.genitive + " (Dative)";
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
        return myAdjective.dativeSingMas + " " + this.genitive + " (Dative)";
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.dativeSingMas + " " + this.genitive.slice(0,-2) + "ēī";
        } else if (this.gender == "f"){
          return myAdjective.dativeSingFem + " " + this.genitive.slice(0,-2) + "ēī";
        }
    } else if (this.genitive.slice(-1,) == "i"){
        return myAdjective.dativeSingMas + " " + this.genitive.slice(0,-1) + "ō";
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.dativeSingMas + " " + this.genitive.slice(0,-2) + "ī";
        } else if (this.gender == "f"){
          return myAdjective.dativeSingFem + " " + this.genitive.slice(0,-2) + "ī";
        } else if (this.gender == "n"){
          return myAdjective.dativeSingNeut + " " + this.genitive.slice(0,-2) + "ī";
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.dativeSingMas + " " + this.genitive.slice(0,-2) + "ūi";
        } else if (this.gender == "f"){
          return myAdjective.dativeSingFem + " " + this.genitive.slice(0,-2) + "ūi";
        }
      }
  }

  get dativeSingTrans(){
    return this.singDativeTrans();
  }

  singDativeTrans(){
    return " to the " + myAdjective.adjTrans + " " + this.singMeaning;
  }

  //ACCUSATIVE

  get accusativeSing(){
    return this.singAccusative();
  }

  singAccusative(){

    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
        return myAdjective.accusativeSingFem + " " + this.genitive.slice(0,-2) + "am";
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
        return myAdjective.accusativeSingMas + " " + this.genitive.slice(0,-2) + "am";
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.accusativeSingMas + " " + this.genitive.slice(0,-2) + "em";
        } else if (this.gender == "f"){
          return myAdjective.accusativeSingFem + " " + this.genitive.slice(0,-2) + "em";
        }
    } else if (this.genitive.slice(-1,) == "i"){
        if (this.gender == "m"){
          return myAdjective.accusativeSingMas + " " + this.genitive.slice(0,-1) + "um";
        } else if (this.gender == "n"){
          return myAdjective.accusativeSingNeut + " " + this.genitive.slice(0,-1) + "um";
        }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.accusativeSingMas + " " + this.genitive.slice(0,-2) + "em";
        } else if (this.gender == "f"){
          return myAdjective.accusativeSingFem + " " + this.genitive.slice(0,-2) + "em";
        } else if (this.gender == "n"){
          return myAdjective.accusativeSingNeut + " " + this.nominative;
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.accusativeSingMas + " " + this.genitive.slice(0,-2) + "um";
        } else if (this.gender == "f"){
          return myAdjective.accusativeSingFem + " " + this.genitive.slice(0,-2) + "um";
        }
      }
  }

  get accusativeSingTrans(){
    return this.singAccusativeTrans();
  }

  singAccusativeTrans(){
      return " the " + myAdjective.adjTrans + " " + this.singMeaning;
  }

  //ablative

  get ablativeSing(){
    return this.singAblative();
  }

  singAblative(){

    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
        return myAdjective.ablativeSingFem + " " + this.genitive.slice(0,-2) + "ā";
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
        return myAdjective.ablativeSingMas + " " + this.genitive.slice(0,-2) + "ā";
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.ablativeSingMas + " " + this.genitive.slice(0,-2) + "ē";
        } else if (this.gender == "f"){
          return myAdjective.ablativeSingFem + " " + this.genitive.slice(0,-2) + "ē";
        }
    } else if (this.genitive.slice(-1,) == "i"){
        return myAdjective.ablativeSingMas + " " + this.genitive.slice(0,-1) + "ō";
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.ablativeSingMas + " " + this.genitive.slice(0,-2) + "e";
        } else if (this.gender == "f"){
          return myAdjective.ablativeSingFem + " " + this.genitive.slice(0,-2) + "e";
        } else if (this.gender == "n"){
          return myAdjective.ablativeSingNeut + " " + this.genitive.slice(0,-2) + "e";
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.ablativeSingMas + " " + this.genitive.slice(0,-2) + "ū";
        } else if (this.gender == "f"){
          return myAdjective.ablativeSingFem + " " + this.genitive.slice(0,-2) + "ū";
        }
      }
  }

  get ablativeSingTrans(){
    return this.singAblativeTrans();
  }

  singAblativeTrans(){
    return " the " + myAdjective.adjTrans + " " + this.singMeaning;
  }

  //Vocative
  get vocativeSing(){
    return this.singVocative();
  }

  singVocative(){

    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
      return myAdjective.femNom + " " + this.nominative;
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
      return myAdjective.vocativeSingMas + " " + this.nominative;
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.vocativeSingMas + " " + this.genitive.slice(0,-2) + "ēs";
        } else if (this.gender == "f"){
          return myAdjective.femNom + " " + this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-1,) == "i"){
        if (this.gender == "n"){
          return myAdjective.neutNom + " " + this.nominative;
        } else if (this.gender == "m"){
            if (this.nominative.slice(-3,) == "ius"){
              return myAdjective.vocativeSingMas + " " + this.genitive.slice(0,-1);
            } else if (this.nominative.slice(-2,) == "us"){
              return myAdjective.vocativeSingMas + " " + this.genitive.slice(0,-1) + "e";
            } else {
              return myAdjective.vocativeSingMas + " " + this.nominative;
            }
        }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.vocativeSingMas + " " + this.nominative;
        } else if (this.gender == "f"){
          return myAdjective.femNom + " " + this.nominative;
        } else if (this.gender == "n"){
          return myAdjective.neutNom + " " + this.nominative;
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.vocativeSingMas + " " + this.nominative;
        } else if (this.gender == "f"){
          return myAdjective.femNom + " " + this.nominative;
        }
      }
  }

  get vocativeSingTrans(){
    return this.singVocativeTrans();
  }

  singVocativeTrans(){
    return myAdjective.vocativeTrans + " " + this.singMeaning;
  }

  //NOMINATIVE PLURAL

  get nominativePl(){
    return this.plNominative();
  }

  plNominative(){

    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
        return myAdjective.nominativePlFem + " " + this.genitive.slice(0,-2) + "ae";
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
        return myAdjective.nominativePlMas + " " + this.genitive.slice(0,-2) + "ae";
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.nominativePlMas + " " + this.genitive.slice(0,-2) + "ēs";
        } else if (this.gender == "f"){
          return myAdjective.nominativePlFem + " " + this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-1,) == "i"){
        if (this.gender == "m"){
          return myAdjective.nominativePlMas + " " + this.genitive.slice(0,-1) + "ī";
        } else if (this.gender == "n"){
          return myAdjective.nominativePlNeut + " " + this.genitive.slice(0,-1) + "a";
        }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.nominativePlMas + " " + this.genitive.slice(0,-2) + "ēs";
        } else if (this.gender == "f"){
          return myAdjective.nominativePlFem + " " + this.genitive.slice(0,-2) + "ēs";
        } else if (this.gender == "n"){
          return myAdjective.nominativePlNeut + " " + this.genitive.slice(0,-2) + "a";
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.nominativePlMas + " " + this.genitive.slice(0,-2) + "ūs";
        } else if (this.gender == "f"){
          return myAdjective.nominativePlFem + " " + this.genitive.slice(0,-2) + "ūs";
        }
      }
  }

  get nominativePlTrans(){
    return this.plNominativeTrans();
  }

  plNominativeTrans(){
    return myAdjective.adjTrans + " " + this.plMeaning;
  }

    //GENITIVE

  get genitivePl(){
      return this.plGenitive();
  }

  plGenitive(){

    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
        return myAdjective.genitivePlFem + " " + this.genitive.slice(0,-2) + "ārum";
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
        return myAdjective.genitivePlMas + " " + this.genitive.slice(0,-2) + "ārum";
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.genitivePlMas + " " + this.genitive.slice(0,-2) + "ērum";
        } else if (this.gender == "f"){
          return myAdjective.genitivePlFem + " " + this.genitive.slice(0,-2) + "ērum";
        }
    } else if (this.genitive.slice(-1,) == "i"){
        if (this.gender == "m"){
          return myAdjective.genitivePlMas + " " + this.genitive.slice(0,-1) + "ōrum";
        } else if (this.gender == "n"){
          return myAdjective.genitivePlNeut + " " + this.genitive.slice(0,-1) + "ōrum";
        }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.genitivePlMas + " " + this.genitive.slice(0,-2) + "um";
        } else if (this.gender == "f"){
          return myAdjective.genitivePlFem + " " + this.genitive.slice(0,-2) + "um";
        } else if (this.gender == "n"){
          return myAdjective.genitivePlNeut + " " + this.genitive.slice(0,-2) + "um";
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.genitivePlMas + " " + this.genitive.slice(0,-2) + "uum";
        } else if (this.gender == "f"){
          return myAdjective.genitivePlFem + " " + this.genitive.slice(0,-2) + "uum";
        }
      }
  }

  get genitivePlTrans(){
      return this.plGenitiveTrans();
  }

  plGenitiveTrans(){
      return " of the " + myAdjective.adjTrans + " " + this.plMeaning;
  }

    //DATIVE

  get dativePl(){
      return this.plDative();
  }

  plDative(){

    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
        return myAdjective.dativePlFem + " " + this.genitive.slice(0,-2) + "īs";
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
        return myAdjective.dativePlMas + " " + this.genitive.slice(0,-2) + "īs";
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.dativePlMas + " " + this.genitive.slice(0,-2) + "ēbus";
        } else if (this.gender == "f"){
          return myAdjective.dativePlFem + " " + this.genitive.slice(0,-2) + "ēbus";
        }
    } else if (this.genitive.slice(-1,) == "i"){
          return myAdjective.dativePlMas + " " + this.genitive.slice(0,-1) + "īs";
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.dativePlMas + " " + this.genitive.slice(0,-2) + "ibus";
        } else if (this.gender == "f"){
          return myAdjective.dativePlFem + " " + this.genitive.slice(0,-2) + "ibus";
        } else if (this.gender == "n"){
          return myAdjective.dativePlNeut + " " + this.genitive.slice(0,-2) + "ibus";
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.dativePlMas + " " + this.genitive.slice(0,-2) + "ibus";
        } else if (this.gender == "f"){
          return myAdjective.dativePlFem + " " + this.genitive.slice(0,-2) + "ibus";
        }
      }
  }

  get dativePlTrans(){
    return this.plDativeTrans();
  }

  plDativeTrans(){
    return " to the " + myAdjective.adjTrans + " " + this.plMeaning;
  }

  //ACCUSATIVE

  get accusativePl(){
    return this.plAccusative();
  }

  plAccusative(){

    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
        return myAdjective.accusativePlFem + " " + this.genitive.slice(0,-2) + "ās";
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
        return myAdjective.accusativePlMas + " " + this.genitive.slice(0,-2) + "ās";
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.accusativePlMas + " " + this.genitive.slice(0,-2) + "ēs";
        } else if (this.gender == "f"){
          return myAdjective.accusativePlFem + " " + this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-1,) == "i"){
        if (this.gender == "m"){
          return myAdjective.accusativePlMas + " " + this.genitive.slice(0,-1) + "ōs";
        } else if (this.gender == "n"){
          return myAdjective.accusativePlNeut + " " + this.genitive.slice(0,-1) + "a";
        }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.accusativePlMas + " " + this.genitive.slice(0,-2) + "ēs";
        } else if (this.gender == "f"){
          return myAdjective.accusativePlFem + " " + this.genitive.slice(0,-2) + "ēs";
        } else if (this.gender == "n"){
          return myAdjective.accusativePlNeut + " " + this.genitive.slice(0,-2) + "a";
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.accusativePlMas + " " + this.genitive.slice(0,-2) + "ūs";
        } else if (this.gender == "f"){
          return myAdjective.accusativePlFem + " " + this.genitive.slice(0,-2) + "ūs";
        }
      }
  }

  get accusativePlTrans(){
    return this.plAccusativeTrans();
  }

  plAccusativeTrans(){
      return " the " + myAdjective.adjTrans + " " + this.plMeaning;
  }

  //ablative

  get ablativePl(){
    return this.plAblative();
  }

  plAblative(){

    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
        return myAdjective.ablativePlFem + " " + this.genitive.slice(0,-2) + "īs";
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
        return myAdjective.ablativePlMas + " " + this.genitive.slice(0,-2) + "īs";
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.ablativePlMas + " " + this.genitive.slice(0,-2) + "ēbus";
        } else if (this.gender == "f"){
          return myAdjective.ablativePlFem + " " + this.genitive.slice(0,-2) + "ēbus";
        }
    } else if (this.genitive.slice(-1,) == "i"){
          return myAdjective.ablativePlMas + " " + this.genitive.slice(0,-1) + "īs";
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.ablativePlMas + " " + this.genitive.slice(0,-2) + "ibus";
        } else if (this.gender == "f"){
          return myAdjective.ablativePlFem + " " + this.genitive.slice(0,-2) + "ibus";
        } else if (this.gender == "n"){
          return myAdjective.ablativePlNeut + " " + this.genitive.slice(0,-2) + "ibus";
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.ablativePlMas + " " + this.genitive.slice(0,-2) + "ibus";
        } else if (this.gender == "f"){
          return myAdjective.ablativePlFem + " " + this.genitive.slice(0,-2) + "ibus";
        }
      }
  }

  get ablativePlTrans(){
    return this.plAblativeTrans();
  }

  plAblativeTrans(){
    return " the " + myAdjective.adjTrans + " " + this.plMeaning;
  }

  //Vocative

  get vocativePl(){
    return this.plVocative();
  }

  plVocative(){

    if (this.genitive.slice(-2,) == "ae" && this.gender == "f"){
        return myAdjective.nominativePlFem + " " + this.genitive.slice(0,-2) + "ae";
    } else if (this.genitive.slice(-2,) == "ae" && this.gender == "m"){
        return myAdjective.nominativePlMas + " " + this.genitive.slice(0,-2) + "ae";
    } else if (this.genitive.slice(-2,) == "ei"){
        if (this.gender == "m"){
          return myAdjective.nominativePlMas + " " + this.genitive.slice(0,-2) + "ēs";
        } else if (this.gender == "f"){
          return myAdjective.nominativePlFem + " " + this.genitive.slice(0,-2) + "ēs";
        }
    } else if (this.genitive.slice(-1,) == "i"){
        if (this.gender == "m"){
          return myAdjective.nominativePlMas + " " + this.genitive.slice(0,-1) + "ī";
        } else if (this.gender == "n"){
          return myAdjective.nominativePlNeut + " " + this.genitive.slice(0,-1) + "a";
        }
    } else if (this.genitive.slice(-2,) == "is"){
        if (this.gender == "m"){
          return myAdjective.nominativePlMas + " " + this.genitive.slice(0,-2) + "ēs";
        } else if (this.gender == "f"){
          return myAdjective.nominativePlFem + " " + this.genitive.slice(0,-2) + "ēs";
        } else if (this.gender == "n"){
          return myAdjective.nominativePlNeut + " " + this.genitive.slice(0,-2) + "a";
        }
    } else if (this.genitive.slice(-2,) == "us"){
        if (this.gender == "m"){
          return myAdjective.nominativePlMas + " " + this.genitive.slice(0,-2) + "ūs";
        } else if (this.gender == "f"){
          return myAdjective.nominativePlFem + " " + this.genitive.slice(0,-2) + "ūs";
        }
      }
  }

  get vocativePlTrans(){
    return this.plVocativeTrans();
  }

  plVocativeTrans(){
    return myAdjective.vocativeTrans + " " + this.plMeaning;
  }

}

var rnai = Math.floor(Math.random() * nounList.length);
var myNounAdjective = new NounAdjective(nounList[rnai][0],nounList[rnai][1],nounList[rnai][2],nounList[rnai][3],nounList[rnai][4]);








// Generic function to return a shuffled array:
  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }

    return array;
  }

//Noun Template

//this randomizes the nounList data
var rni = Math.floor(Math.random() * nounList.length);
var myNoun = new Noun(nounList[rni][0],nounList[rni][1],nounList[rni][2],nounList[rni][3],nounList[rni][4]);

var rn2i = Math.floor(Math.random() * nounList2.length);
var myNoun2 = new Noun(nounList2[rn2i][0],nounList2[rn2i][1],nounList2[rn2i][2],nounList2[rn2i][3],nounList2[rn2i][4]);



//This randomizes the order of the buttons
var flex = ["flexA","flexB","flexC","flexD"];
var flexIndx = Math.floor(Math.random() * flex.length);

shuffle(flex);

function reset(){

//resets ablative prepositions
rpali = Math.floor(Math.random() * prepAblList.length);

//resets verbSum
rvsi = Math.floor(Math.random() * verbSum.length);

//resets nouns (m/f/n)
rnlmi = Math.floor(Math.random() * nounListMas.length);
rnlfi = Math.floor(Math.random() * nounListFem.length);
rnlni = Math.floor(Math.random() * nounListNeut.length);

//resets the adjectiveList
rali = Math.floor(Math.random() * adjectiveList.length);
ral2i = Math.floor(Math.random() * adjectiveList.length);

//NounAdjective reset
rnai = Math.floor(Math.random() * nounList.length);
myNounAdjective = new NounAdjective(nounList[rnai][0],nounList[rnai][1],nounList[rnai][2],nounList[rnai][3],nounList[rnai][4]);


//Adjective reset
  rai = Math.floor(Math.random() * adjectiveList.length);
  myAdjective = new Adjective(adjectiveList[rai][0],adjectiveList[rai][1],adjectiveList[rai][2],adjectiveList[rai][3],adjectiveList[rai][4],adjectiveList[rai][5]);


//Noun Reset
  rni = Math.floor(Math.random() * nounList.length);
  myNoun = new Noun(nounList[rni][0],nounList[rni][1],nounList[rni][2],nounList[rni][3],nounList[rni][4]);

  rn2i = Math.floor(Math.random() * nounList2.length);
  myNoun2 = new Noun(nounList2[rn2i][0],nounList2[rn2i][1],nounList2[rn2i][2],nounList2[rn2i][3],nounList2[rn2i][4]);




  //verb reset

  rvi = Math.floor(Math.random() * verbList.length);
  myVerb = new Verb(verbList[rvi][0],verbList[rvi][1], verbList[rvi][2], verbList[rvi][3], verbList[rvi][4],verbList[rvi][5],verbList[rvi][6],verbList[rvi][7]);
  console.log(verbList.length)

  rv2i = Math.floor(Math.random() * verbList.length);
  myVerb2 = new Verb(verbList[rv2i][0],verbList[rv2i][1], verbList[rv2i][2], verbList[rv2i][3], verbList[rv2i][4],verbList[rv2i][5],verbList[rv2i][6],verbList[rv2i][7]);

  rv3i = Math.floor(Math.random() * intransVerbList.length);
  myVerb3 = new Verb(intransVerbList[rv3i][0],intransVerbList[rv3i][1], intransVerbList[rv3i][2], intransVerbList[rv3i][3], intransVerbList[rv3i][4],intransVerbList[rv3i][5],intransVerbList[rv3i][6],intransVerbList[rv3i][7]);


//THE ALGORITHM BELOW ENSURES THAT ALL VERBS ARE USED BEFORE ANOTHER IS REPEATED
  //this creates a Set to contain the verb deleted from the verbList array
  x = new Set();
  //this deletes the randomized verb
  y = verbList.splice(rvi,1);
  console.log(verbList.length);
  //the has() method determines whether a verb has been called already
  if (x.has(y)){
    reset();
  }
  //this adds the chosen verb to the Set
  x.add(y);
  console.log(y);
  //this resets the verbList when all of them have been deleted
  if (verbList.length ==0){
    verbList = [["amo", "amare", "amavi","amatus", "love", "loving", "loved", "loved"],["cogito", "cogitare", "cogitavi","cogitatus", "consider", "considering", "considered", "condsidered"],["erro", "errare", "erravi","erratus", "mistake", "mistaking", "mistook", "mistaken"],["laudo", "laudare", "laudavi","laudatus", "praise", "praising", "praised", "praised"],["observo", "observare", "observavi","observatus", "observe", "observing", "observed", "observed"],["debeo", "debēre", "debui","debitus", "owe", "owing", "owed", "ought"],["moneo", "monēre", "monui","monitus", "warn", "warning", "warned", "advised"],["terreo", "terrēre", "terrui","territus", "frighten", "frightening", "terrified", "frightened"],["servo", "servare", "servavi","servatus", "guard", "saving", "kept", "preserved"],["conservo", "conservare", "conservavi","conservatus", "preserve", "conserving", "maintained", "preserved"],["voco", "vocare", "vocavi","vocatus", "call", "summoning", "called", "summoned"],["video", "vidēre", "vīdi","visus", "see", "seeing", "saw", "seen"]];
}




console.log(myNoun.vocativePl);


  sentenceArray = [["si " + nounListNeut[rnlni][0].slice(-2,) + "a sunt " + adjectiveList[rali][1] + ", " + adjectiveList[ral2i][0] + " es", "If the  " + nounListNeut[rnlni][4] + " are " + adjectiveList[rali][4] + ", you are " + adjectiveList[ral2i][4]],[myVerb3.thirdSingFut + " " + prepAblList[rpali][0] + " " + myNounAdjective.ablativeSing,myVerb3.thirdSingFutTrans + " " + prepAblList[rpali][1] + " " + myNounAdjective.ablativeSingTrans],[myNoun2.nominativeSing + " mē " + myVerb.thirdSingPres, myNoun2.nominativeSingTrans + " " + myVerb.thirdSingPresTrans2 + " me"],[myVerb.actInfPres + " est humanum", "To " + myVerb.verb + " is human"],[nounListNeut[rnlni][0] + " " + adjectiveList[rali][2] + " est","The " + nounListNeut[rnlni][3] + " is " + adjectiveList[rali][4]],[nounListFem[rnlfi][0] + " " + adjectiveList[rali][1] + " est","The " + nounListFem[rnlfi][3] + " is " + adjectiveList[rali][4]],[nounListMas[rnlmi][0] + " " + adjectiveList[rali][0] + " est","The " + nounListMas[rnlmi][3] + " is " + adjectiveList[rali][4]],[myNounAdjective.accusativeSing + " " + myNoun.genitiveSing + " " + myVerb.secondSingPres,myVerb.secondSingPresTrans + " " + myNounAdjective.accusativeSingTrans + " " + myNoun.genitiveSingTrans],[myNounAdjective.accusativeSing + " " + myNoun.genitiveSing + " " + myVerb.secondPlPres,myVerb.secondPlPresTrans + " " +  myNounAdjective.accusativeSingTrans + " " + myNoun.genitiveSingTrans],[myNounAdjective.nominativeSing + " et " + myNoun.nominativeSing + " " + myVerb.thirdPlPres,"The " + myNounAdjective.nominativeSingTrans + " and " + myNoun.accusativeSingTrans + " " + myVerb.thirdPlPresTrans2],[myNounAdjective.accusativeSing + " " + myNoun2.ablativeSing + " " +  " terret","He frightens " + " " +  myNounAdjective.accusativeSingTrans + " with " + myNoun2.ablativeSingTrans],[myNoun.dativeSing + " " + myNounAdjective.accusativeSing + " das","You give " + " " +  myNounAdjective.accusativeSingTrans + " " + myNoun.dativeSingTrans],[myNoun.accusativeSing + " " + myVerb.thirdPlPres + " " + myNounAdjective.nominativePl,"The " + myNounAdjective.nominativePlTrans + " " + myVerb.thirdPlPresTrans2 + " " + myNoun.accusativeSingTrans],[myNoun.vocativePl + ", " + myVerb.imperativePl + " " + myNounAdjective.accusativePl + "!", myNoun.vocativePlTrans + ", " + myVerb.imperativePlTrans + " " + myNounAdjective.accusativePlTrans + "!"],[myNoun.vocativeSing + ", " + myVerb.imperativeSing + " " + myNounAdjective.accusativeSing + "!", myNoun.vocativeSingTrans + ", " + myVerb.imperativeSingTrans + " " + myNounAdjective.accusativeSingTrans + "!"],[myNoun.nominativePl + " " + myNounAdjective.accusativePl + " " + myVerb.thirdPlPres,myNoun.nominativePlTrans + " " + myVerb.thirdPlPresTrans2  + " " + myNounAdjective.accusativePlTrans],[myNoun.nominativeSing + " " + myNounAdjective.accusativePl + " " + myVerb.thirdSingPres,myNoun.nominativeSingTrans + " " + myVerb.thirdSingPresTrans2 + " " + myNounAdjective.accusativePlTrans],[myNoun.nominativeSing + " " + myNounAdjective.accusativePl + " " + myVerb.thirdSingPres,myNoun.nominativeSingTrans + " " + myVerb.thirdSingPresTrans2 + " " + myNounAdjective.accusativePlTrans],[myNounAdjective.nominativeSing + " " + myNoun.accusativeSing + " " + myVerb.thirdSingPres,"The " + myNounAdjective.nominativeSingTrans + " " + myVerb.thirdSingPresTrans2 + " " + myNoun.accusativeSingTrans],[myNounAdjective.vocativeSing + ", " + myNoun.accusativeSing + " " + myVerb.firstPlPres + "!", myNounAdjective.vocativeSingTrans + ", we " + myVerb.thirdPlPresTrans2 + " " + myNoun.accusativeSingTrans +"!"],[myNoun.nominativeSing + " " + myNounAdjective.accusativePl + " " + myVerb.thirdSingImp,myNoun.nominativeSingTrans + " " + myVerb.thirdSingImpTrans2 + " " + myNounAdjective.accusativePlTrans],[myNoun.nominativePl + " " + myNounAdjective.accusativeSing + " " + myVerb.thirdPlFut,myNoun.nominativePlTrans + " " + myVerb.thirdPlFutTrans2 + " " + myNounAdjective.accusativeSingTrans]];

//[nounListMas[rnlmi][0] + " " + myAdjective.nominativeSingMas + " est","The " + [nounListMas[rnlmi][3] + " is " + myAdjective.singMeaning]
  shuffle(sentenceArray)

//randomizes order of flex boxes
  flex = ["flexA","flexB","flexC","flexD"];
  flexIndx = Math.floor(Math.random() * flex.length);
  shuffle(flex);

  stopTimer();
  timer = 20;
  document.getElementById("flex1c").innerHTML =  "Timer"
}

function startGame(){

  reset();

  countDownTimer();
  countdown = setInterval(countDownTimer,1000);

  document.getElementById("flex1b").disabled = true;

  document.getElementById("flexA").style.display = "block";
  document.getElementById("flexB").style.display = "block";
  document.getElementById("flexC").style.display = "block";
  document.getElementById("flexD").style.display = "block";

  document.getElementById("flexA").disabled = false;
  document.getElementById("flexB").disabled = false;
  document.getElementById("flexC").disabled = false;
  document.getElementById("flexD").disabled = false;

  document.getElementById("flexA").style.backgroundColor = "#008CBA";
  document.getElementById("flexB").style.backgroundColor = "#008CBA";
  document.getElementById("flexC").style.backgroundColor = "#008CBA";
  document.getElementById("flexD").style.backgroundColor = "#008CBA";

  document.getElementById("flex1b").innerHTML = sentenceArray[0][0];
  document.getElementById(flex[0]).innerHTML = sentenceArray[0][1];
  document.getElementById(flex[1]).innerHTML = sentenceArray[1][1];
  document.getElementById(flex[2]).innerHTML = sentenceArray[2][1];
  document.getElementById(flex[3]).innerHTML = sentenceArray[3][1];

}

function answerFlexA(){

  if (document.getElementById("flexA").innerHTML == sentenceArray[0][1]){

    var latin = sentenceArray[0][0];
    document.getElementById("flexA").innerHTML = "Bene!!! " + latin.italics() + " means: " + sentenceArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "green";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexA").style.backgroundColor = "red"
  document.getElementById("flexA").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;

  }
}

function answerFlexB(){

  if (document.getElementById("flexB").innerHTML == sentenceArray[0][1]){


    var latin = sentenceArray[0][0];
    document.getElementById("flexB").innerHTML = "Optime!!! " + latin.italics() + " means: " + sentenceArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "green";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexB").style.backgroundColor = "red"
  document.getElementById("flexB").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}

function answerFlexC(){

  if (document.getElementById("flexC").innerHTML == sentenceArray[0][1]){

    var latin = sentenceArray[0][0];
    document.getElementById("flexC").innerHTML = "Bene!!! " + latin.italics() + " means: " + sentenceArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "green";
    document.getElementById("flexD").style.backgroundColor = "#008CBA";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();

  } else {

  document.getElementById("flexC").style.backgroundColor = "red"
  document.getElementById("flexC").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}

function answerFlexD(){

  if (document.getElementById("flexD").innerHTML == sentenceArray[0][1]){

    var latin = sentenceArray[0][0];
    document.getElementById("flexD").innerHTML = "Optime!!! " + latin.italics() + " means: " + sentenceArray[0][1];
    document.getElementById("flex1b").disabled = false;
    document.getElementById("flex1b").innerHTML =  "Ludamus Iterum!"
    document.getElementById("flexA").disabled = true;
    document.getElementById("flexB").disabled = true;
    document.getElementById("flexC").disabled = true;
    document.getElementById("flexD").disabled = true;
    document.getElementById("flexA").style.backgroundColor = "#008CBA";
    document.getElementById("flexB").style.backgroundColor = "#008CBA";
    document.getElementById("flexC").style.backgroundColor = "#008CBA";
    document.getElementById("flexD").style.backgroundColor = "green";
    points++;
    attempts++;
    document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
    stopTimer();
  } else {

  document.getElementById("flexD").style.backgroundColor = "red"
  document.getElementById("flexD").disabled = true;
  attempts++;
  document.getElementById("flex1a").innerHTML = points  + "/" + attempts;
  }
}
