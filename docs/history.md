---
title: History
description: An overview on the history of summer hosts
sidebar_position: 2
---

```mermaid
graph TD;
  A[artix.cloud] --> H[halex.gg]
  H --> PO[polarisnode.com];
  PO --> PLC[plutonodes.com];
  PO --> PA[palladin];
  PA --> Z1[ztx.gd];
  Z1 --> B[blare.host];
  B --> Z2[ztx.gd];
  Z2 --> TE[tegra.gg];
  TE --> X1[xeh.sh];
  X1 --> PL[plutonodes.net];
  PL --> FR[frac.gg];
  FR --> SY[synthoptic.io]
  SY --> XE["xeh.sh (ether)"];
  XE -->|Buyers were scammed by ether, allegedly| X2["xeh.sh (buyers)"];
  XE --> S["Shut down"]
  NE[netherite.io] --> D[died];

  click PO href "/Hosts/polarisnode.com";
  click XE href "/Hosts/xeh.sh#shutdown-1122025";
```