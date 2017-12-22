# image-gallery

A simple gallery for displaying images.

## Setup

### Prerequisites

- Vagrant
- Berkshelf (through Chef Development Kit)

### Steps

```sh
$ berks vendor cookbooks
$ vagrant up
$ vagrant ssh
vagrant@jessie $ cd image-gallery
vagrant@jessie $ npm i
vagrant@jessie $ npm run start
```

Then point your browser to http://10.10.10.61:8080.

## Cleanup

When finished running the webpack-dev-server:

```sh
vagrant@jessie $ exit
$ vagrant suspend
```