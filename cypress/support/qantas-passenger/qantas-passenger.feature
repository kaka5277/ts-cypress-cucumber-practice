@QB-84:Passengers-Search-Submission
Feature: Passengers Search Submission

    Background:
        Given I am on the flight search page

    Scenario Outline: passengers can't be more than 9
        Given I select passengers as "<Passengers>"
        When I click '+' button in "<Row>"
        Then I should see alert
        Examples:
            | Passengers | Row      |
            | 3-4-2      | adults   |
            | 4-4-1      | children |
            | 5-1-3      | infants  |

