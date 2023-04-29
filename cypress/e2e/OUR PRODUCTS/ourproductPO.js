class productPO{
    elements = {
        speakersProduct : () => cy.get("#speakersTxt"),
        speaker20 : () => cy.get("#20"),
        speakerTitle : () => cy.get("#Description >.roboto-regular"),
        back: () => cy.go('back'),
        speaker25: () =>cy.get("#25"),
        speaker23: () =>cy.get("#23"),
        speaker21: () =>cy.get("#21"),
        accordionWeightSpeakers: () =>cy.get("#accordionAttrib2"),
        weightspeaker: () =>cy.get('label[for="weight_4"]'),
        weight: () =>cy.get('label[class="value ng-binding"]'),
        colorTurquesse: () =>cy.get("span[title='TURQUOISE']"),
        colorRed: () =>cy.get("[ng-show='firstImageToShow']>.RED"),
        imageDefault: () =>cy.get('#mainImg'),
    }
    buttonspeakers(){
        return this.elements.speakersProduct();
    }
    selectSpeaker20(){
        return this.elements.speaker20();
    }
    selectSpeaker21(){
        return this.elements.speaker21();
    }
    selectSpeaker23(){
        return this.elements.speaker23();
    }
    selectSpeaker25(){
        return this.elements.speaker25();
    }
    goBack(){
        return this.elements.back();
    }
    selectTitle(){
        return this.elements.speakerTitle();
    }
    selectAccordionWeight(){
        return this.elements.accordionWeightSpeakers();
    }
    selectWeight(){
        return this.elements.weightspeaker();
    }
    VerifyWeight(){
        return this.elements.weight();
    }
    selectColorTurquoise(){
        return this.elements.colorTurquesse();
    }
    selectColorRed(){
        return this.elements.colorRed();
    }
    verifyimage(){
        return this.elements.imageDefault();
    }
 }

export default productPO;