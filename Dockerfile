FROM node:16.12.0-alpine3.13 AS builder

ARG BRANCH_OR_TAG=main
ARG HOSTER=git.griefed.de

RUN \
  apk add \
    git \
    npm && \
  git clone \
    -b $BRANCH_OR_TAG \
      https://$HOSTER/Griefed/ltt-mapmaker.git \
        /tmp/lttmm && \
  cd /tmp/lttmm && \
  npm install -g npm@7.23.0 && \
  npm install -g @quasar/cli && \
  npm install && \
  quasar build

FROM lsiobase/nginx:3.16-version-52cb0d10

ARG VERSION=dev

LABEL maintainer="Griefed <griefed@griefed.de>"
LABEL version=$VERSION
LABEL description="Visual Map Maker for Let Them Trade by Spaceflower."

RUN \
  mkdir -p \
    /app/lttmm && \
  echo "**** Cleanup ****" && \
    rm -rf \
      /root/.cache \
      /tmp/*

COPY --from=builder tmp/lttmm/dist/spa/ /app/lttmm
COPY root/ /

EXPOSE 80 443

VOLUME /config
