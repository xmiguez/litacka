/* empty css                           */import { c as createAstro, a as createComponent, r as renderTemplate, b as addAttribute, d as renderHead } from '../astro.184d11fa.mjs';
import 'html-escaper';
import 'cookie';
import 'kleur/colors';
import 'path-to-regexp';
import 'mime';
import 'string-width';

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`<html lang="en">
  <head>
    <meta charset="utf-8">
    <link rel="icon" type="image/svg+xml" href="/favicon.svg">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <meta name="viewport" content="width=device-width">
    <meta name="generator"${addAttribute(Astro2.generator, "content")}>
    <title>Pid Litacka</title>
  ${renderHead()}</head>
  <body class="bg-[#f3f5f7]" style="font-family: 'Roboto', sans-serif;">
    <section id="TODO" class="mx-4">
      <div id="SETTINGS" class="text-right">
        <i class="fa-solid fa-gear fa-lg" style="color:#2a1253;"></i>
      </div>
      <h1 class="text-left text-[30px] font-bold mt-3">My Tickets</h1>
      <section id="TIRA" class="flex bg-[#e3e5e9] rounded-md my-6 font-medium justify-around">
        <div class="flex-auto text-center text-[#25114e] m-0.5 py-0.5 px-1 rounded-md">
          Tickets
        </div>
        <div class="flex-auto text-center m-0.5 py-0.5 px-1 bg-[#2a1253] rounded-md text-white">
          Passes
        </div>
      </section>
      <section id="RELOJ" class="text-[20px] font-medium text-center mb-2">
      </section>
      <section id="CODIGO QR" class="flex justify-center text-center mb-2">
        <img src="src/pages/QR1.jpg">
      </section>

      <section id="NOMBRE" class="flex justify-between mb-5">
        <div class="text-[18px] text-center mt-0.5">Owner</div>
        <div class="text-[20px] font-bold">Miguel Cifuentes</div>
      </section>
      <section id="BANER" class="flex text-center bg-white rounded-t-md shadow-xl pb-1">
        <div class="flex-auto border-r-2 pt-4 text-center justify-center text-[15px] font-medium">
          <div class="mb-0.5 px-6">
            <i class="fa-solid fa-user fa-2xl"></i>
          </div>personal
        </div>

        <div class="flex flex-auto gap-x-9 border-r-2 text-center justify-center">
          <div class="ml-3">
            <div class="text-[30px]">12</div><div class="text-[15px] -my-1">
              months
            </div>
          </div>

          <div class="">
            <div class="flex text-center justify-center">
              <div class="text-[30px]">P</div><div>
                <div class="my-1 text-[13px]">0</div><div class="text-[14px] -mt-3">
                  B
                </div>
              </div>
            </div>
            <div class="text-[15px] -my-1">Prague</div>
          </div>

          <div class="text-center justify-center pt-2 mr-3">
            <div>
              <img src="src/pages/GENDER.jpg">
            </div><div class="text-[15px] pt-0.5">adult</div>
          </div>
        </div>
        <div class="flex-auto justify-center text-center pt-5 mx-2">
          <i class="fa-solid fa-ellipsis-vertical fa-lg"></i>
        </div>
      </section>
      <div class="flex py-1.5 text-center justify-center bg-[#ededef] rounded-b-md shadow-md">
        <div class="text-[17px] font-normal">
          Expire on
          <b>Feb 6, 2024</b>
        </div>
      </div>
    </section>
  
</body></html>`;
}, "C:/Users/Miguel/Desktop/litacka/src/pages/index.astro");

const $$file = "C:/Users/Miguel/Desktop/litacka/src/pages/index.astro";
const $$url = "";

export { $$Index as default, $$file as file, $$url as url };
