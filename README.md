
# Flow2CodeGame

https://flow2codegame.netlify.app/

![Flow2CodeGame]()

Oferta i wytyczne projektu były w języku polskim zatem postanowiłem sporządzić dokumentację w tym języku. Głównym celem projektu jest stworzenie gry polegającej na trafieniu pociskiem wystrzelonym z armaty w ścianę ułożoną z sześciennych obiektów (kostek). Jeżeli gracz zburzy układ, to zostaje nagrodzony. Każda zmiana położenia kostki w macierzy matrixa oznacza 1 punkt dla gracza. Jeżeli gracz trafi w ścianę ale nie zmieni pozycji żadnej kostki, to nic się nie dzieje. Jeżeli gracz nie trafi w żadną kostkę (tym samym w ścianę), to traci 1 punkt. Każda z 2 ścian jest postawiona na podświetlonym polu. Kolor czerwony pola oznacza, że nie wszystkie (lub żadna) kostka/i nie zmieniły/a swojego położenia. Kolor zielony oznacza, że ściana została kompletnie zburzona. Po zburzeniu obydwu ścian, wyświetla się informacja o wyniku gracza, a także uruchamia się finałowa animacja. W trakcie jej trwania lub po jej zakończenia można zresetować grę do stanu początkowego.

# Wytyczne

:green_circle: - zrobione
:yellow_circle: - wymaga omówienia
:red_circle: - niewykonane

1. Scena Zawiera:
    - :green_circle: armatę
    - :green_circle: wystrzeliwaną kulę armatnią
    - :green_circle: ścianę złożoną ze sześcianów
    - :green_circle: UI z punktami gracza.
    - :green_circle: płaszczyznę (plane) jako ziemia
2. Kryteria:
    - :green_circle: armata własnoręcznie zbudowana z prymitywnych kszałtów (np. walec, sześcian), lub zaimportowany darmowy model glTF ze strony sketchfab.com.
    - :green_circle: wystrzał armaty powinien być konfigurowany przez użytkownika (np. moc wystrzału, kąt lufy, obrót aramty). Konfiguracja może odbywać za pomocą UI htmlowego lub klawiatury.
    - :green_circle: armata powinna być statyczna, ale zanimowana. (tzn. gracz nie powinien poruszać/jeździć artmatą, lecz sama armata powinna odzwierciedlać ustawienia gracza np kąt lufy, lub obrót.)
    - :green_circle: ścianka powinna składać się z przynajmniej 9 kostek ułożonych na sobie 3x3.
    - :green_circle: po wystrzale z armaty kamera powinna śledzić kulę.
    - :green_circle: kula powinna wytracać moc i spadać (możliwa sytuacja że kula spadnie nim doleci do ściany jeżeli damy zbyt małą moc wystrzału).
    - :yellow_circle: po kontakcie kuli z ziemią, resetujemy stan i możemy wystrzelić jeszcze raz.
    - :green_circle: trafienie kulą w ścianę oznacza punkt dla gracza, brak trafienia odjęcie punktu.
    - :yellow_circle: kula zmienia kolor z czerwonego na niebieski wraz z prędkością. (Na początku wystrzału czerwona wytracając prędkość kolor zmienia się na niebieski)
3. Technologie:
    - :green_circle: Kod napisany w języku JavaScript, w miarę możliwości wraz z TypeScript.
    - :green_circle: Użycie biblioteki Three.js, w miarę możliwości wraz z nakładką React Three Fiber.
    - :green_circle: Jeżeli zostanie użyty model glTF, to trzeba go wyedytować za pomocą narzędzia gltfjsx https://github.com/pmndrs/gltfjsx
4. Dodatkowe punkty:
    - :red_circle: użycie ESLint, Prettier
    - :yellow_circle: animacja jakiegoś elementu za pomocą tween.js (np. armata cofa się po wystrzale i wraca na swoje miejsce)
    - :green_circle: dodanie silnika ficzynego Cannon.js (lub @react-three/cannon w przypadku React Three Fiber) i zaplementowanie „zburzenia” ściany


# Lista NPM

 - @react-three/cannon@6.3.0
 - @types/node@16.11.43
 - @types/react-dom@18.0.6
 - @types/react@18.0.15
 - @types/styled-components@5.1.25
 - @types/three@0.141.0
 - leva@0.9.29
 - react-dom@18.2.0
 - react-scripts@5.0.1
 - react@18.2.0
 - typescript@4.7.4
 - web-vitals@2.1.4