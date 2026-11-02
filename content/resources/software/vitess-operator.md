---
title: "vitess-operator"
link: "https://github.com/planetscale/vitess-operator"
description: "The Kubernetes operator for Vitess, maintained by PlanetScale — a VitessCluster custom resource that deploys and manages Vitess clusters on Kubernetes, with quickstart guides for AWS and GCP."
subcategories:
  - DevOps & Deployment
compatibility:
  - Vitess
deployment:
  - Kubernetes
pricing:
  - Open Source
---

vitess-operator introduces a VitessCluster custom resource definition that lets Kubernetes manage the full lifecycle of a Vitess deployment — provisioning keyspaces, shards, and tablets, running scheduled vtbackup jobs, and tracking metrics — instead of configuring Vitess components by hand. The project documents quickstarts for both AWS and GCP, alongside a general Kubernetes setup guide and a VitessCluster API reference.

Maintained by PlanetScale under the Apache 2.0 license, its documentation includes a compatibility matrix pairing operator releases with supported Vitess and Kubernetes versions.
