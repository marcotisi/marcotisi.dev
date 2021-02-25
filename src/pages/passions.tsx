import { PageProps } from "gatsby";
import React from "react";

import { Layout } from "../components";

export const Passions: React.FC<PageProps> = () => (
  <Layout>
    <div>
      {`Photography

I've always loved to take pictures: freezing a moment let's you never
forget that feeling you had. I started with a mirrorless camera, an
Olympus Pen E-PL6 after figuring it out that smartphones are too limited
if you want to explore the world of photography. 
My best shots are landscapes, but I'm pretty good at shooting portraits
and night photography.

My current equipment is:

  ▪ Olympus OM-D E-M10 Mark III
  ▪ Olympus M.Zuiko 14-42mm f3.5/5.6 
  ▪ Olympus M.Zuiko 45mm f1.8`}
    </div>
    <br />
    <a
      href="https://500px.com/marcotisi"
      target="_blank"
      rel="noopener noreferrer"
    >
      Checkout
    </a>{" "}
    my profile on 500 px
    <div>
      {`
~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~

Travelling

Travelling is another passion: the first plane I took was an intercontinental
flight from Venice to Seattle to meet with one of my dearest friend who lived
in Washington State. I stayed for a month and we visited a lot of countries by
train, bus, bicycle, foot and even hitchhiking. 
Since then, I never stop travelling.  

Here is a list of countries I visited:

  ▪ U.S.A. (Washington, Oregon, Idaho, Montana)
  ▪ U.K.
  ▪ Austria
  ▪ Spain
  ▪ Portugal
  ▪ Croatia
  ▪ Slovenia
  ▪ Germany
  ▪ Switzerland
  ▪ Czech Republic
  ▪ Netherlands
  ▪ Greece

~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~=~

Surfing

Since the first day when I moved to Lanzarote (Canary Islands) I always wanted
to learn how to surf. After a month I bought a surf board and took some lessons.
This was one of the best choice in my life! Surfing is hard, it forces you to 
face your fears, but the first time you get up on a surf board, you feel great!
It's a sport that connects yourself with the ocean, the waves, the beach and
other surfers. You feel in peace with yourself.

If you have the opportunity, I highly recommend you to try it out!
  `}
    </div>
  </Layout>
);

export default Passions;
