---
title: History
description: An overview on the history of summer hosts.
sidebar_position: 2
---

```mermaid
graph TD;
  A[artix.cloud] --> H[halex.gg];

  H --> PO[polarisnode.com];
  H --> CO[containeris.wtf];
  H --> GR[gridway.io];

  PO --> PLC[plutonodes.com];
  PO --> PA[palladin];

  PA --> Z1[ztx.gd];
  Z1 --> B[blare.host];
  B --> Z2[ztx.gd];
  LU[Lunx] --> TE[tegra.gg];
  TE --> X1[xeh.sh];
  X1 --> PL[plutonodes.net];
  PL --> FR[frac.gg];
  FR --> SY[synthoptic.io]
  SY --> XE["xeh.sh (ether)"];
  XE -->|Buyers were scammed by ether, allegedly| X2["xeh.sh (buyers)"];
  XE --> S["Shut down"];

  NE[netherite.io] --> D[died];
  CO --> D;


  click PO href "/Hosts/polarisnode.com";
  click XE href "/Hosts/xeh.sh";
  click H href "/Hosts/halex.gg";
  click GR href "/Hosts/gridway.io";
  click TE href "/Hosts/tegra.gg";
```