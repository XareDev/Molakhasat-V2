import lxml.html
from lxml.html import builder as El
from lxml.builder import E
import io


def Molakhasat(type: str, name: str, Id: str, sub: str, year: str):
    if type.lower() == "ms":
        html = El.HTML(
            El.HEAD(
                El.LINK(rel="shortcut icon", type="image/png", href="../../logo.png"),
                El.META(name="description",
                        content=f"{name} الخاص بمادة {sub} للسنة {year} ثانوي في الجزائر للسنة الدراسية 2021/2022"),
                El.META(name="viewport", content="width=device-width, initial-scale=1.0"),
                El.LINK(rel="stylesheet", href="../../general_style.css"),
                El.LINK(rel="stylesheet", href="molakhasat_pages_style.css"),
                El.TITLE(f"Molakhasat | {name}")
            ),
            El.BODY(
                El.DIV(id="loading"),
                E("header",
                  E("img", src="../../logo.png", alt="logo", id="logo"),
                  El.A(
                      El.BUTTON("إدعمونا"),
                      El.CLASS("cta"),
                      href=""
                  ),

                  E("nav",
                    El.UL(
                        El.LI(El.A("المنتدى", href="../../blog.html")),
                        El.LI(El.A("تواصل معنا", href="../../contact_us.html")),
                        El.LI(El.A("الرئيسية", href="../../index.html", id="current-page"))

                        , El.CLASS("nav_links")
                    )
                    )
                  ),

                E("main",

                  El.DIV(
                      El.DIV(
                          El.DIV(
                              El.H1(name)
                              , id="cover-text"),
                          El.IMG(src="../../summaries.png", alt="", id="cover-img")
                          , id="cover-content")

                      , id="cover"),

                  El.DIV(
                      El.DIV(
                          El.P(name, id="molakhasat-container-text"),
                          El.HR(),
                          El.DIV(
                              El.IFRAME(src=f"https://drive.google.com/file/d/{Id}/preview", id="molakhas_preview",
                                        allow="autoplay"),
                              El.DIV(
                                  El.DIV(
                                      El.A(El.P("تحميل الملف", El.CLASS("texts btns-texts")),
                                           href=f"https://drive.google.com/file/d/{Id}/view")
                                      , El.CLASS("btns"))
                                  , id="btns-container")
                              , id="molakhas")
                          , id="molakhasat-container"),

                      El.DIV(
                          El.A(El.P("العودة للصفحة السابقة", El.CLASS("texts"), id="back-btn-text"), href="index.html")
                          , id="back-btn")
                      , id="molakhas-holder"),

                  E("footer",
                    El.DIV(id="page-end")
                    ),

                  El.SCRIPT(src="../../script.js")

                  )
            ),
        )


    elif type.lower() == "hm":
        html = El.HTML(
            El.HEAD(
                El.LINK(rel="shortcut icon", type="image/png", href="../../logo.png"),
                El.META(name="description",
                        content=f"{name} الخاص بمادة {sub} للسنة {year} ثانوي في الجزائر للسنة الدراسية 2021/2022"),
                El.META(name="viewport", content="width=device-width, initial-scale=1.0"),
                El.LINK(rel="stylesheet", href="../../general_style.css"),
                El.LINK(rel="stylesheet", href="homeworks_pages_style.css"),
                El.TITLE(f"Molakhasat | {name}")
            ),
            El.BODY(
                El.DIV(id="loading"),
                E("header",
                  E("img", src="../../logo.png", alt="logo", id="logo"),
                  El.A(
                      El.BUTTON("إدعمونا"),
                      El.CLASS("cta"),
                      href=""
                  ),

                  E("nav",
                    El.UL(
                        El.LI(El.A("المنتدى", href="../../blog.html")),
                        El.LI(El.A("تواصل معنا", href="../../contact_us.html")),
                        El.LI(El.A("الرئيسية", href="../../index.html", id="current-page"))

                        , El.CLASS("nav_links")
                    )
                    )
                  ),

                E("main",

                  El.DIV(
                      El.DIV(
                          El.DIV(
                              El.H1(name)
                              , id="cover-text"),
                          El.IMG(src="../../homework.png", alt="", id="cover-img")
                          , id="cover-content")

                      , id="cover"),

                  El.DIV(
                      El.DIV(
                          El.P(name, id="homeworks-container-text"),
                          El.HR(),
                          El.DIV(
                              El.IFRAME(src=f"https://drive.google.com/file/d/{Id}/preview", id="molakhas_preview",
                                        allow="autoplay"),
                              El.DIV(
                                  El.DIV(
                                      El.A(El.P("تحميل الملف", El.CLASS("texts btns-texts")),
                                           href=f"https://drive.google.com/file/d/{Id}/view")
                                      , El.CLASS("btns"))
                                  , id="btns-container")
                              , id="molakhas")
                          , id="homeworks-container"),

                      El.DIV(
                          El.A(El.P("العودة للصفحة السابقة", El.CLASS("texts"), id="back-btn-text"), href="index.html")
                          , id="back-btn")
                      , id="molakhas-holder"),

                  E("footer",
                    El.DIV(id="page-end")
                    ),

                  El.SCRIPT(src="../../script.js")

                  )
            ),
        )
    return lxml.html.tostring(html, encoding="unicode", doctype="<!DOCTYPE html>", pretty_print=True)


x = Molakhasat("hm", "ملخص الجنس", "unknown", sub="الجنس", year="الأولى")

def SaveMolakhas(file_name, molakhas):
    with io.open(file_name, 'w', encoding="utf-8") as file:
        file.write(molakhas)
        file.close()

def Molkhas_code(name: str, number: int, author: str) :
    code = El.DIV(
        El.DIV(
            El.P(
                author
                , El.CLASS("molakhas-credit")
            )
            , El.CLASS("molakhas-credit-container")
        ),
        
        El.DIV(
            El.A(
                El.DIV(
                    name
                    , El.CLASS("molakhas-name")
                )
                , href=f"m{str(number)}.html"
                
                )
            , El.CLASS("molakhas-name-container")
        )
        
        , El.CLASS("molakhas")
        )
    return lxml.html.tostring(code, encoding="unicode", pretty_print=True)

Hm = ["العقيدة و أثرها على الفرد و المجتمع", "وسائل القرآن في تثبيت الشريعة الإسلامية", "الإسلام و الرسالات السماوية", "العقل في الإسلام", "مقاصد الشريعة الإسلامية", "منهج الإسلام في محاربة الإنحراف و الجريمة"]
HmId = ["11yl_3Va0niyoPg1BAVtPHZp65W3222uc", "1RSqrDdOId1EmuRzSRU6aiAD58o72lRIn" ,"1_JsPxBOOVYISaaIsSGPehk6l5-tgXUbb", "1WvBeSL1yUQR5adMOg8sgVKyXKVUI6U43", "1zvh-f6NPT1961mAJPMwGVOV5J7dYuwSG", "1ffYaC6UmP4MX4Rcr04xUBxKLCtM5ikwl"]
HmA = ["يوسف هرموني"]
HmS = "فلسفة"
HmY = "الثالثة"

for i in range(0, len(Hm)):
    m = Molakhasat(type="ms", name=Hm[i], Id=HmId[i], sub=HmS, year=HmY)
    SaveMolakhas(f"m{i+1+25}.html", m)
    print(Molkhas_code(Hm[i], i+1+25, author=HmA[0]))

