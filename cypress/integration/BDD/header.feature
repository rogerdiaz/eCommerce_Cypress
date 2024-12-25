Feature: End to end Header validation
    Product Store header test

    Scenario Outline: Header Logo functionality

        Given I visit Product Store
        When I click on Logo
        Then Homepage is shown

    Scenario Outline: Home button functionality

        Given I visit Product Store
        When I click on Home
        Then Homepage is shown

    Scenario Outline: Contact button functionality

        Given I visit Product Store
        When I click on Contact
        Then Contact Modal is visible

    Scenario Outline: About us button functionality

        Given I visit Product Store
        When I click on About us
        Then About us Modal is visible

    Scenario Outline: Log in button functionality

        Given I visit Product Store
        When I click on Log in
        Then Log in Modal is visible

    Scenario Outline: Log out button functionality

        Given I visit Product Store
        When I click on Log in
        When I Log in with credentials username: "admin" and password: "admin"
        When I click on Log Out
        Then Log out button disappeared

    Scenario Outline: Welcome button functionality

        Given I visit Product Store
        When I click on Log in
        When I Log in with credentials username: "admin" and password: "admin"
        Then Welcome button shows the username: "admin"
        