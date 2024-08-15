import * as pulumi from "@pulumi/pulumi";
import * as random from "@pulumi/random";

const pet = new random.RandomPet("pet", {
    length: 3
});

export const petName = pet.id;
