Feature: End to end eCommerce page validation
    Product Store body test

    Scenario Outline: Category: Phone button functionality
        Given I go to Product Store
        When I click on Phone
        Then I check all the elements of "Phones" list

    Scenario Outline: Category: Laptops button functionality
        Given I go to Product Store
        When I click on Laptops
        Then I check all the elements of "Laptops" list

    Scenario Outline: Category: Monitors button functionality
        Given I go to Product Store
        When I click on Monitors
        Then I check all the elements of "Monitors" list