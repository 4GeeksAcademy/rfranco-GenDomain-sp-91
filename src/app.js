
let pronun = ["El", "Tu", "Nuestro"];
let adj = ["gran", "pequeño"];
let noun = ["perro", "hamster", "tigre", "delfín"];

for (let a = 0; a < pronun.length; a++) {
  for (let b = 0; b <  adj.length; b++) {
    for (let c = 0; c < noun.length; c++) {
      console.log(pronun[a] + adj[b] + noun[c] + ".com");
    }
  }
}