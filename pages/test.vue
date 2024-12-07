<template>
    123
</template>

<script setup>
    function Fighter(name, health, damagePerAttack) {
        this.name = name;
        this.health = health;
        this.damagePerAttack = damagePerAttack;
        this.toString = function() { return this.name; }
}
function declareWinner(fighter1, fighter2, firstAttacker) {

let [f1name, f1health, f1damage] = [fighter1.name, fighter1.health, fighter1.damagePerAttack]
let [f2name, f2health, f2damage] = [fighter2.name, fighter2.health, fighter2.damagePerAttack]
let first = firstAttacker

let obj = {f1name: [f1health, f1damage], f2name: [f2health, f2damage]}


console.log(first)
}
console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"), "Lew")
</script>