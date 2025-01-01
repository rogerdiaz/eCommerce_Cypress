Feature: End to end eCommerce page validation
    Product Store body test

    # Scenario Outline: Category: Phone button functionality
    #     Given I go to Product Store
    #     When I click on Phone
    #     Then I check all the elements of "Phones" list

    # Scenario Outline: Category: Laptops button functionality
    #     Given I go to Product Store
    #     When I click on Laptops
    #     Then I check all the elements of "Laptops" list

    # Scenario Outline: Category: Monitors button functionality
    #     Given I go to Product Store
    #     When I click on Monitors
    #     Then I check all the elements of "Monitors" list

    # Scenario Outline: Category: Next button functionality
    #     Given I go to Product Store
    #     When I click on Next
    #     Then I see the Second page

    # Scenario Outline: Category: Previous button functionality
    #     Given I go to Product Store
    #     When I click on Next
    #     When I click on Previous
    #     Then I see the First page

    # Scenario Outline: Category: Cart functionality
    #     Given I go to Product Store
    #     When I click on product named "Samsung galaxy s6"
    #     When I add the product to the Cart
    #     Then The product "Samsung galaxy s6" was added to the cart 

    Scenario Outline: Category: Item deletion functionality
        Given I go to Product Store
        When I click on product named "Samsung galaxy s6"
        When I add the product to the Cart
        When I delete the product I added
        Then The "Samsung galaxy s6" is not found in the Items list

    Scenario Outline: Category: Purchase functionality
        Given I go to Product Store
        When I click on product named "Samsung galaxy s6"
        When I add the product to the Cart
        When I go to Cart
        When I click on Place Order
        When I fill the Place Order form with the info Name:"Test1", Country:"Guatemala", City:"Guatemala", Credit Cart:"123456789", Month:"1", Year:"2025"
        When I click on Purchase
        Then Popup message shows the same Amount, Card Number:"123456789", Name:"Test1", Date:"1/0/2025"