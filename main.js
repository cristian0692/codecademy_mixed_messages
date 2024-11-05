const randomMessageGenerator = {
    fruits: ["banana", "apple","peach","kiwi", "pineapple"],
    sentences: ["fruit was eaten by actor", "actor stepped on the fruit", "fruit has been grown by the actor" , "fruit has ran away from the brutal actor"],
    actors: ["T-rex","chicken", "robot", "Shwarzneger"],
    getRandomInt(max) {
        return Math.floor(Math.random() * max);
      },

    generateRanomdMessage(){
        selectedFruit = this.fruits[this.getRandomInt(this.fruits.length)];
        selectedSentence = this.sentences[this.getRandomInt(this.sentences.length)];
        selectedActor = this.actors[this.getRandomInt(this.actors.length)];

        selectedSentence = selectedSentence.split(" ");
        actorPlaceholder =  selectedSentence.findIndex(word => word == "fruit");
        fruitPlaceholder = selectedSentence.findIndex(word => word == "actor");
        selectedSentence[actorPlaceholder] = selectedActor;
        selectedSentence[fruitPlaceholder] = selectedFruit;

        return selectedSentence.join(" ");
    }
}

console.log(randomMessageGenerator.generateRanomdMessage());