# Pomysły:

1. Do walidacji isNaN... w funkcji validateInputs() możliwe byłoby dodanie, np. input.setAttribute("data-is-valid") z wartościami 0 lub 1. Wówczas możliwe byłoby pominięcie dodatkowej walidacji w funkcji validateEndValues(), a przynajmniej jej uproszczenie - potrzebne byłoby tylko zebranie "data-is-valid" z wszystkich inputów i np. dodanie? Przykładowo, jeśli ich suma wyniesie 3, to wtedy można iść dalej.

- Problemy:
    a) Bazowanie na "data-is-valid" dla inputu z sekcji procentów może być problematyczne - no bo...

- Rozwiązanie:
    a) Podczas naciskania na któryś z buttonów w sekcji procentów "data-is-valid" inputa z klasą custom zmienia się na dodatnie? Po naciśnięciu na input z klasą custom dokonuje się walidacja.

Spoko! :-)
