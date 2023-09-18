---
theme: ksick-dynatrace
title: API First
defaults:
  eventName: API First - freeCodeCamp
  eventDate: September 20, 2023
speaker: Andreas Taranetz
jobTitle: Software Engineer
transition: slide-left
---

<style>
.blue {
  color: var(--blue);
}
.green {
  color: var(--green);
}
.purple {
  color: var(--purple);
}
</style>

# API First Approach

<!--
approach to build software 
that is interacted with via rest apis = Backends
Frontend devs don't zone out now

no new programming language
language agnostic way to describe apis

nothing new / still not common practice

who am I to talk about this
-->

---
layout: about
transition: fade-out
image: https://andreas.taranetz.com/images/andreas.webp
speaker: Andreas Taranetz
jobTitle: Software Engineer
website: andreas.taranetz.com
---



<!--
I built frontends and backends with various languages and frameworks

Of the 2 hard problems in software engineering...

naming is my favorite one

I like things that are well documented

what I don't like are abbreviations
-->

---
layout: center
---

<h1>API <span v-click="1">(A<span v-click="2">pplication</span> P<span v-after="2">rogramming</span> I<span v-after="2">nterface</span>)</span></h1>

<p v-click="3">
API <strong>specification</strong> = <strong>description</strong> of an API
</p>

<!--
Who knows the abbreviation

Why would we start with a description?
Isn't this a waste of time?
Can't this be generated afterward?

API First = start thinking about API before the implementation

you would also do this inside your code
-->

---
layout: center
---

<span class="green" v-click="1">input → </span><span class="blue">function</span><span class="purple" v-click="2"> → output</span>

<p><span class="blue">getUser</span>(<span v-after="1" class="green">email: String</span>):<span class="purple" v-after="2">User</span> { ... }</p>

<!--
like writing a function signature before writing its implementation

this requires both FE and BE devs to sit together

how do frontends talk to backends?

no chatty, no cumbersome

forms a contract
-->

---

# REST (REpresentational State Transfer)

<v-clicks>

**Transfer** a **representation** of the **state** of some resource

| **Action**     | **Request Method** |
|:---------------|:-------------------|
| ✨ **C**reate   | POST               |
| 👀 **R**ead    | GET                |
| 📝 **U**pdate  | PATCH / PUT        |
| 🗑️ **D**elete | DELETE             |

</v-clicks>

<!--
transfer the data using http

manipulate state of resources → HTTP methods

response: payload
status codes

idempotent = can I do it multiple times without changing the server state

but were can we find the resources
-->

---

# URI (Universal Resource Identifier)

<p class="mono" style=margin-top:4em>
<span class="purple" v-click>https:</span>
<span v-after="2">//</span>
<span class="blue">
  <span v-click="4">andreas</span>
  <span v-click="3">.taranetz</span>
  <span v-click="2">.com</span>
</span>
<span v-after="5">/</span>
<span v-click="5" class="green">whoami</span>
<span v-click="6" class="purple">?key=value</span>
</p>

<span class="purple" v-after="1">Protocol</span>
<span class="blue" style="margin-left:3em" v-after="2">Host Name</span>
<span class="green" style="margin-left:3.5em" v-after="5">Path</span>
<span class="purple" style="margin-left:1em" v-after="6">Query Parameter</span>

<!--
parts of the path can be variable

hostname points to a server

path is locating a resource on that server

wasn't there something about representation?
-->

---

# Media Types

<v-clicks>

Representation is controlled by the <strong class="green">accept</strong> header

`text/html`

`image/jpeg`

`application/json`
</v-clicks>

<!--
Also known as MIME types
= Multipurpose Internet Mail Extensions or MIME type

how are resources represented

type / subtype
-->

---
layout: center
transition: fade-out
---

<div style="display: flex; gap: 2em; align-items: start">
<div>

# JSON

```json
{
	"swagger": "2.0",
	"info": {
		"version": "4.2.0",
		"description": "This is a json example."
	},
	"schemes": [
		"http",
		"https"
	]
}
```
</div>
<div>

# YAML

```yaml
swagger: "2.0"
info:
  version: 4.2.0
  description: This is a yaml example.
schemes:
  - http
  - https
```
</div>
</div>
<img v-click width=200 style="position: absolute; right: 120px; bottom: 100px;" src="/seal-of-approval.png" />

<!--
JavaScript Object Notation

YAML Ain't Markup Language

readability is key

this document is for machines & humans
-->

---
layout: image-right
image: getPets.png
---

# Open API Specs

```yaml {all|1|2|3,4|5|6|8-14|15-21}
openapi: 3.1.0
info: ...
paths:
  /pet/{petId}:
    get:
      summary: Find pet by ID
      operationId: getPetById
      parameters:
        - name: petId
          in: path
          required: true
          schema:
            type: integer
            format: int64
      responses:
        '200':
          description: successful operation
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Pet'
        ...
```

<!--
big object | every field has a clearly defined meaning

swagger UI / redoc / many other tools

info: metadata (explaining high level concepts)

path → method → input → output
-->

---
layout: center
transition: fade-out
---

# DEMO TIME 🤞

[editor-next.swagger.io](https://editor-next.swagger.io/)

<!--
what to do with this api spec
-->

---

# Generation of server code

<img src="/generate-server.png" />

<!--
Generation of code in many languages and frameworks
-->

---

# Generation of client code

<img src="/generate-client.png" />

<!--
make it part of your build process
-->

---
transition: fade-out
---

# Generation of mock servers

[github.com/muonsoft/openapi-mock](https://github.com/muonsoft/openapi-mock)

<v-clicks>
```bash
docker run \
-p 8080:8080 \
-e "OPENAPI_MOCK_SPECIFICATION_URL=https://raw.githubusercontent.com/swagger-api/swagger-petstore/master/src/main/resources/openapi.yaml" \
--rm muonsoft/openapi-mock
```

```bash
curl localhost:8080/v3/pet/1
```

```json
{
	"category": {
		"id": 564639390,
		"name": "Odio illum. Facilis. Exercitationem."
	},
	"id": 544596506,
	"name": "Voluptatum error. Earum perferendis aut repellendus. Culpa alias laborum ratione.",
	"photoUrls": [
		"Ut temporibus. Iure et architecto repellendus. Perferendis blanditiis.",
		...
	],
	"status": "pending",
	"tags": [
		{
			"id": 900087713,
			"name": "Nostrum cum excepturi reiciendis sed. Ut. Sed accusantium alias nulla. Quia et. Dolor ducimus molestiae nulla fugiat sapiente qui reprehenderit."
		},
		...
	]
}
```

</v-clicks>

<!--
→ what if there is a breaking change?

removing a field

requiring a new input that was not there previously
-->

---
transition: fade-out
---

# Versioning

<v-clicks>

In the host name<p class="mono"><strong class="blue">api-v2</strong>.example.com/resource</p>

In the path <p class="mono">api.example.com/<strong class="blue">v2</strong>/resource</p>

In the query <p class="mono">api.example.com/resource<strong class="blue">?version=2</strong></p>

<img width=200 style="position: absolute; right: 250px; bottom: 160px;" src="/seal-of-approval.png" />

</v-clicks>

<!--
api version is different than service version

one of them is my preferred way to go

all of them have their pros and cons

think of versioning before you need versioning
-->

---
layout: none
transition: fade-out
---



<!--
after reading the specs
don't get lost / overwelmed

you are not alone in this

many great developers think hard about how to build good apis

some of them even publish their thoughts
-->

---
layout: iframe-right
url: https://opensource.zalando.com/restful-api-guidelines/
---

# Guidelines

[Zalando](https://opensource.zalando.com/restful-api-guidelines/)

<v-clicks>

[Microsoft](https://github.com/microsoft/api-guidelines)

[Google](https://cloud.google.com/apis/design/)

...

just don't ask ChatGPT

</v-clicks>


<!--
provide consistency 

drive developer experience

build consistent apis with great documentation 

your fellow developers will love you for
-->

---
layout: outro-speaker
image: 'https://andreas.taranetz.com/images/andreas.webp'
speaker: Andreas Taranetz
website: andreas.taranetz.com
---

---
layout: center
---

# Link to the slides

<img src="/api-first-approach.png" style="height: 400px"/>
