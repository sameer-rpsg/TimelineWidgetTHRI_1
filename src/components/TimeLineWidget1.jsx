import React, { useEffect } from "react";
import styles from "@/components/TimeLineWidget1.module.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
gsap.registerPlugin(ScrollTrigger, SplitText);
const TimeLineWidget1 = () => {
  const timelineData1 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "Lacquerware was first developed in Vietnam as a practical craft for creating durable, waterproof objects like bowls, trays, and furniture.",
        "The use of lacquer resin from the ”son ta” tree (Toxicodendron vernicifluum) became a hallmark of Vietnamese craftsmanship.",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  const timelineData2 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "Of course, Rani Chatterjee has a signature music theme. And, of course, Alia Bhatt wears the most gorgeous sarees as this firebrand Bengali journalist who — along with an ultra-Punjabi Ranveer Singh (not in a saree) — upgrades the ",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  const timelineData3 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "Bhatt’s portrayal of Kaira — an aspiring image-maker who seeks therapy to resolve her own black-and-white flashbacks — validates a new generation that has strived to normalise mental health discourse and complex parental trauma. It’s an emotionally intelligent performance that conveys how the stigma associated with psychological duress is not different from the stigma surrounding the courage to dream. Kaira wants to be a storyteller",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  const timelineData4 = [
    {
      yearLabel: "2000+",
      subtitle: "YEARS AGO",
      title: "Ancient Beginnings",
      highlights: [
        "works for the same reason her performances in Gangubai Kathiawadi and Udta Punjab  shine: you don’t expect it to. She looks miscast in the role of a frantic Indian spy who marries into a Pakistani family — only to weaponise our preconceived notions of her inexperience, frightful youth, delicate frame and urban gait. Every perceived flaw supplies the point of her character. ",
      ],
      images: [
        {
          src: "https://cdn.prod.website-files.com/6734928e2af1829d3c568460/68119712c8c4c74ad0ef01b8_p1-1.avif",
          alt: "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
          caption:
            "”son ta” tree - Toxicodendron vernicifluum (Son Ta Phu Tho - Rhus Succedanea paint in Phu Tho)",
        },
      ],
    },
  ];
  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      const container = document.querySelector(`.${styles.horizontal}`);
      const wrapper = container?.querySelector(`.${styles.horizontal_wrapper}`);
      const listItems = container?.querySelectorAll(
        `.${styles.about_list_item}`
      );

      if (container && wrapper && listItems.length) {
        const horizontalScrollTimeline = gsap
          .timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: container,
              start: "top top",
              end: () => "+=" + (wrapper.scrollWidth - window.innerWidth),
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          })
          .to(wrapper, {
            x: () => -(wrapper.scrollWidth - window.innerWidth),
            ease: "none",
          });

        listItems.forEach((item) => {
          const split = new SplitText(item, {
            //   type: "lines",
            linesClass: "single_line",
            mask: "lines",
          });

          gsap.from(split.lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            scrollTrigger: {
              trigger: item,
              containerAnimation: horizontalScrollTimeline,
              start: "left 80%",
              once: true,
            },
          });
        });
      }
    });

    mm.add("(max-width: 991px)", () => {
      const listItems = document.querySelectorAll(`.${styles.about_list_item}`);

      listItems.forEach((item) => {
        const split = new SplitText(item, {
          type: "lines",
          mask: "lines",
          linesClass: `${styles.single_line}`,
        });

        gsap.from(split.lines, {
          yPercent: 100,
          opacity: 0,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 90%",
            once: true,
          },
        });
      });
    });

    // Cleanup SplitText instances on unmount
    return () => {
      SplitText.revert();
      mm.revert();
    };
  }, []);

  return (
    <div className={`${styles.horizontal} ${styles.is_about}`}>
      <div className={`${styles.horizontal_wrapper} ${styles.is_about}`}>
        {timelineData1.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_first}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                  <div className={`${styles.about_horizontal_progress} ${styles.firstProgessIndicator}`}>
                    <div className={styles.about_progress_circle_wrapper}>
                      <div className={styles.about_progress_circle} />
                    </div>
                  </div>
                <div className={styles.about_horizontal_info}>
                <div className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_1}`}>
                  <h2 className={styles.about_timeline_heading}>
                    Badrinath Ki Dulhania (2017)
                  </h2>
                  {/* <div className={styles.yearago}>{item.subtitle}</div> */}
                </div>
                  {/* <div className={styles.u_hide_tablet}></div> */}
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* Villas */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {/* {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li> */}
                      <li className={styles.about_list_item}>
                       Wikipedia calls Vaidehi Trivedi a “beautiful and well-educated woman who has her own career aspirations,” but the description barely scratches the surface of what Bhatt brings to this seemingly familiar role. Not for the first time,
                      </li>
                      {/* <li className={styles.about_list_item}>
                        The third building features a lounge and dining area.
                        Outside, enjoy a private pool and an exclusive dining
                        pavilion.
                      </li> */}
                      {/* ))} */}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div
                        key={idx}
                        className={styles.about_horizontal_image_wrapper}
                      >
                        <img
                          src="
                          https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Fbms-new%2Feditor-images%2F-2024-10-09T08%253A26%253A58.688Z-Badrinath-Ki-Dulhania_N.jpg&w=1920&q=75"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          <em>
                           Varun Dhawan and Alia Bhatt in <i>Badrinath Ki Dulhania</i>
                          </em>
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/03/10/555375-badrinath1.jpg"
                            loading="lazy"
                            width="390"
                            height="260"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                           Varun Dhawan and Alia Bhatt in <i>Badrinath Ki Dulhania</i>
                          </em>
                          </div>
                        </div>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2017/03/10/555375-badrinath1.jpg"
                            loading="lazy"
                            width="390"
                            height="260"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                           Varun Dhawan and Alia Bhatt in <i>Badrinath Ki Dulhania</i>
                          </em>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
        {timelineData2.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_2}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                    <div className={styles.about_horizontal_progress}>
                      <div className={styles.about_progress_circle_wrapper}>
                        <div className={styles.about_progress_circle} />
                      </div>
                    </div>
                <div className={styles.about_horizontal_info}>
                  <div
                    className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_2}`}
                  >
                    <h2 className={styles.about_timeline_heading}>Rocky Aur Rani Kii Prem Kahaani (2023)</h2>
                    {/* <div className={styles.yearago}>
                     
                      CENTURY
                    </div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* {item.title} */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div
                        key={idx}
                        className={styles.about_horizontal_image_wrapper}
                      >
                        <img
                          src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Fbms-new%2Feditor-images%2F-2024-10-09T08%253A21%253A59.472Z-Rocky-Aur-Rani-Kii-Prem-Kahaani_N.jpg&w=1920&q=75"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          <em>
                           Ranveer Singh and Alia Bhatt in <i>Rocky Aur Rani Kii Prem Kahaani</i>
                          </em>
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://m.media-amazon.com/images/S/pv-target-images/20e07311a2535374a54ed66127107ef0fcaf7d48dab411d44a04ee4aee5bf173.jpg"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                             <em>
                           Ranveer Singh and Alia Bhatt in <i>Rocky Aur Rani Kii Prem Kahaani</i>
                          </em>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
        {timelineData3.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_2}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                  <div className={styles.about_horizontal_progress}>
                    <div className={styles.about_progress_circle_wrapper}>
                      <div className={styles.about_progress_circle} />
                    </div>
                  </div>
                <div className={styles.about_horizontal_info}>
                  <div
                    className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_2}`}
                  >
                    <h2 className={styles.about_timeline_heading}>Dear Zindagi (2016)</h2>
                    {/* <div className={styles.yearago}>CENTURY</div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* The Oberoi Spa */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div
                        key={idx}
                        className={styles.about_horizontal_image_wrap_big}
                      >
                        <img
                          src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Fbms-new%2Feditor-images%2F-2024-10-09T08%253A25%253A34.514Z-Dear-Zindagi_N.jpg&w=1920&q=75"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          <em>Shah Rukh Khan and Alia Bhatt in <i>Dear Zindagi</i></em>
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://images.mubicdn.net/images/film/159865/cache-179341-1745493346/image-w1280.jpg?size=800x"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                            sizes="(max-width: 479px) 100vw, 418px"
                          />
                          <div className={styles.u_text_style_small}>
                             <em>Shah Rukh Khan and Alia Bhatt in <i>Dear Zindagi</i></em>
                          </div>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
        {timelineData4.map((item, index) => (
          <section
            key={index}
            className={`${styles.section_about_horizontal} ${
              index === 0 ? `${styles.is_2}` : ""
            }`}
          >
            <div className={styles.about_horizontal_container}>
              <div className={styles.about_horizontal_slide}>
                  <div className={styles.about_horizontal_progress}>
                    <div className={styles.about_progress_circle_wrapper}>
                      <div className={styles.about_progress_circle} />
                    </div>
                  </div>
                <div className={styles.about_horizontal_info}>
                  <div
                    className={`${styles.about_timeline_heading_wrapper} ${styles.is_section_2}`}
                  >
                    <h2 className={styles.about_timeline_heading}>Raazi (2018)</h2>
                    {/* <div className={styles.yearago}>CENTURY</div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      {/* Events */}
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={styles.about_gallery_wrapper}>
                  {item.images.map((img, idx) => (
                    <>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          key={idx}
                          className={styles.about_horizontal_image_wrapper}
                        >
                          <img
                            src="https://www.hollywoodreporterindia.com/_next/image?url=https%3A%2F%2Fcdn.hollywoodreporterindia.com%2Fbms-new%2Feditor-images%2F-2024-10-09T08%253A22%253A23.461Z-Raazi_N.jpg&w=1920&q=75"
                            alt={img.alt}
                            //   width="390"
                            //     height="475"
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                              Vicky Kaushal and Alia Bhatt in <i>Raazi</i> 
                            </em>
                          </div>
                        </div>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="data:image/jpeg;base64,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"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                            sizes="(max-width: 479px) 100vw, 418px"
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                              Vicky Kaushal and Alia Bhatt in <i>Raazi</i> 
                            </em>
                          </div>
                        </div>
                      </div>
                      <div
                        key={idx}
                        className={styles.about_horizontal_artwork_wrapper}
                      >
                        <img
                          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWjplI-3vQKyyczFvgxDaqiia1fCBKuMOH3Q&s"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <em>
                              Vicky Kaushal and Alia Bhatt in <i>Raazi</i> 
                            </em>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.about_progress_wrapper}>
              <div className={styles.about_progress_line} />
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default TimeLineWidget1;

// const t = gsap.matchMedia();
// t.add("(min-width: 769px)", () => {
//   const t = document.querySelector(`.${styles.horizontal}`),
//     r = t.querySelector(`.${styles.horizontal_wrapper}`);
//   t &&
//     r &&
//     gsap
//       .timeline({
//         defaults: {
//           ease: "none",
//         },
//         scrollTrigger: {
//           trigger: t,
//           start: "top top",
//           end: () => "+=" + (r.scrollWidth - window.innerWidth),
//           pin: !0,
//           scrub: 1,
//           invalidateOnRefresh: !0,
//         },
//       })
//       .to(r, {
//         x: () => -(r.scrollWidth - window.innerWidth),
//         ease: "none",
//       });
// }),
//   t.add("(max-width: 768px)", () => {
//     ScrollTrigger.kill();
//   });
