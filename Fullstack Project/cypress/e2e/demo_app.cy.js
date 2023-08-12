
import {recurse} from 'cypress-recurse'
Cypress.config('defaultCommandTimeout', 10000);
describe('Article_creation',function()     {
beforeEach(function(){

    cy.visit("https://demo.realworld.io/#/login")
    cy.get("input[type=email]").type('nithitestwork@gmail.com');
    cy.get("input[type=password]").type('nithi123');
    cy.get("button[type=submit").click();
    //cy.wait(10000);
    
})



it ('Test1', ()=> {  

    //Verifying whether article is being published without any data 
    cy.contains('New Article');
    const paths = new Array('//fieldset//fieldset[1]//input','//fieldset//fieldset[2]//input','//fieldset//fieldset[3]//textarea')
    cy.xpath("//a[@ui-sref='app.editor']").click()
    //cy.wait(8000)
    let x="TEST ARTICLESsssssss"
    let j=0
    for(let i = 0; i < 4 ; i++)
    {
       
       

        cy.get('.btn').click()
        cy.wait(6000)

        if(i==3)
        {
                recurse(()=>cy.xpath(paths[1]).should(Cypress._.noop),Cypress._.isEmpty,{

                    post(){

                        cy.xpath(paths[0]).type(j)
                        cy.get('.btn').click()
                        cy.wait(6000)
                        j++
                    },
                    delay:1000,
                    limit:50,
                    timeout:1000000,

                },
                )
             cy.xpath('//button[@ng-click="$ctrl.deleteArticle()"]').should('exist')
             break   
        }
        

        
        cy.contains('be blank')
        cy.xpath(paths[i]).type(x)
        

        

        
    }
})

it ('Test2', ()=> {  

    //cy.wait(2000)

    cy.xpath('//a[@href="#/@NTester1"]').click()
    //cy.wait(4000)
    cy.xpath('//article-preview[1]//h1').should('exist').click()
    //cy.wait(4000)
    cy.xpath('//div[@class="container page"]//a[@ui-sref="app.editor({ slug: $ctrl.article.slug })"]').should('exist').click()
    //cy.wait(4000)
    cy.xpath('//fieldset//fieldset[3]//textarea').type('edited')
    cy.get('.btn').click()
    //cy.wait(4000)
    cy.contains('edited')



})

})