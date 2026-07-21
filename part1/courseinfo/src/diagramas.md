# tareas parte 0 - Karen Zamora.

## 0.4 nuevo diagrama nota

```mermaid
sequenceDiagram
    participant browser
    participant server
    
    Note right of browser: escribo algo en el input y click en save

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note](https://studies.cs.helsinki.fi/exampleapp/new_note)
    activate server
    Note over server: el server mete la nota en el array data
    server-->>browser: HTTP 302 (redirect a /notes)
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/notes](https://studies.cs.helsinki.fi/exampleapp/notes)
    activate server
    server-->>browser: recarga el HTML
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/main.css](https://studies.cs.helsinki.fi/exampleapp/main.css)
    activate server
    server-->>browser: css file
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/main.js](https://studies.cs.helsinki.fi/exampleapp/main.js)
    activate server
    server-->>browser: el JS de la pagina
    deactivate server

    Note right of browser: el js pide el json con los datos nuevos

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json)
    activate server
    server-->>browser: [{ "content": "test kz", "date": "2026" }, ... ]
    deactivate server

    Note right of browser: el callback dibuja las notas otra vez
```

## 0.5 diagrama spa
```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/spa](https://studies.cs.helsinki.fi/exampleapp/spa)
    activate server
    server-->>browser: el HTML de la SPA
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/main.css](https://studies.cs.helsinki.fi/exampleapp/main.css)
    activate server
    server-->>browser: main.css
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/spa.js](https://studies.cs.helsinki.fi/exampleapp/spa.js)
    activate server
    server-->>browser: aca carga spa.js en vez del main.js anterior
    deactivate server

    browser->>server: GET [https://studies.cs.helsinki.fi/exampleapp/data.json](https://studies.cs.helsinki.fi/exampleapp/data.json)
    activate server
    server-->>browser: trae el json con las notas creadas
    deactivate server
```

## 0.6 nueva nota spa
    ```mermaid
    sequenceDiagram
    participant browser
    participant server

    Note right of browser: click en save (el js atrapa el evento)
    Note right of browser: la SPA agrega la nota a la lista en pantalla sin recargar todo

    browser->>server: POST [https://studies.cs.helsinki.fi/exampleapp/new_note_spa](https://studies.cs.helsinki.fi/exampleapp/new_note_spa)
    activate server
    Note over server: guarda el json de la nota nueva
    server-->>browser: HTTP 201 created
    deactivate server
    ```