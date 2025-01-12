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
            El.DIV(
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

Hm = ["ملخص درس المدود", "ملخص درس الشريعة الإسلامية", "ملخص درس الغزو الثقافي و مخاطره", "ملخص درس الزكاة", "ملخص درس الزواج", "ملخص درس الأمن", "ملخص درس المذاهب", "ملخص درس الشبهات", "ملخص درس الحج", "ملخص درس التوجيهات"]
HmId = ["1gXazGfihnvAGd5_XKSibRulXThHH5AMK", "1zU324TgVqaqrgX1RVmo0W8AenKzfLKbS", "1EjeHn9xqfKz5rbQEY60d79k8gN3kjWhK", "1cNov7c4TxyiiEkI-ltXTHc1YwzGiIl2b", "15Fup93cJbJIHCFjjdB8IraFR2djnnxXy", "1EBSgv_0gC3WhxolXiHyXFgm8pIZ4BJ1i", "1op2B5dcXhClNlalaFAk5ZvodWF95fUjJ", "11qP-SakRQGXTbn6fOLla8jJ3vbHFO6ix", "11SsESeiAb6NYEEjPfkR2n_54Tkhae4Qo", "15_szo6Dltq-hTCZu_eYWhS4azJyTJ-aw"]
HmS = "الإسلامية"
HmY = "الثانية"

for i in range(0, len(Hm)):
    m = Molakhasat(type="ms", name=Hm[i], Id=HmId[i], sub=HmS, year=HmY)
    SaveMolakhas(f"h{i+1}.html", m)
    print(Molkhas_code(Hm[i], i, author="يوسف هرموني"))

