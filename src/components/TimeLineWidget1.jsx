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
  const timelineData3 = [
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
  const timelineData4 = [
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
                      Villas
                    </h3>
                    <ul role="list" className={styles.about_list}>
                      {/* {item.highlights.map((text, idx) => (
                        <li key={idx} className={styles.about_list_item}>
                          {text}
                        </li> */}
                      <li className={styles.about_list_item}>
                        Spread across three spacious buildings, the villa
                        includes two en-suite bedrooms — one king-size and one
                        twin.
                      </li>
                      <li className={styles.about_list_item}>
                        The third building features a lounge and dining area.
                        Outside, enjoy a private pool and an exclusive dining
                        pavilion.
                      </li>
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
                          https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/accommodation_rajvilas/kohinoor-villa-with-private-pool/ks_revised/820x646/kohinoor_suite_pool_area.jpg?w=724&hash=1a4968a78bc9df5c845ec4e75be5b46d"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          <em>
                            Every detail has been considered in this exceptional
                            accommodation.
                          </em>
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/accommodation_rajvilas/kohinoor-villa-with-private-pool/ks_revised/820x646/kohinoor_suite_living_room.jpg?w=310&hash=9bbd11afb733ef456bf83f155e0d675d"
                            loading="lazy"
                            width="390"
                            height="260"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                              Includes a master bedroom, an en-suite bathroom,
                            </em>
                          </div>
                        </div>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/accommodation_rajvilas/kohinoor-villa-with-private-pool/ks_revised/820x646/kohinoor_suite_dining_area_.jpg?w=310&hash=32a028e2fffe8236b6ec710f668a712c"
                            loading="lazy"
                            width="390"
                            height="260"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            <em>Temperature-controlled swimming poo</em>
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
                      {item.title}
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
                          src="https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/Rajvilas/Dining/suryamahal/desktop820x646/21.jpg"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          <em>
                            The Sun Palace is our all day fine dining restaurant
                            in Jaipur.{" "}
                          </em>
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/Rajvilas/Dining/Rajmahal/desktop820x646/rajmahal.jpg"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                              Raj Mahal is our speciality Indian restaurant.
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
                    <h2 className={styles.about_timeline_heading}>Wellness</h2>
                    {/* <div className={styles.yearago}>CENTURY</div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      The Oberoi Spa
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
                          src="https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/wellness/spa_therapies/desktop820x646/oberoi_exp.jpg"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          <em>The Oberoi Spa in Jaipur offers Eastern,</em>
                        </div>
                      </div>
                      <div className={styles.about_horizontal_image_column}>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/wellness/spa_therapies/desktop820x646/massage.jpg"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                            sizes="(max-width: 479px) 100vw, 418px"
                          />
                          <div className={styles.u_text_style_small}>
                            <em>Located in a carefully restored haveli,</em>
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
                    <h2 className={styles.about_timeline_heading}>Events</h2>
                    {/* <div className={styles.yearago}>CENTURY</div> */}
                  </div>
                  <div className={styles.about_horizontal_text}>
                    <h3
                      className={`${styles.u_text_style_h4} ${styles.u_mb_5}`}
                    >
                      Events
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
                            src="https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/rajvilas-new/Event/event/desktop_overview_1260x600/conference_hall.jpg"
                            alt={img.alt}
                            //   width="390"
                            //     height="475"
                            className={styles.about_horizontal_image}
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                              Chandravanshi. Furnished with a grand table that
                              can seat up to 22 people. 
                            </em>
                          </div>
                        </div>
                        <div
                          className={styles.about_horizontal_artwork_wrapper}
                        >
                          <img
                            src="https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/rajvilas-new/Event/event/desktop_overview_1260x600/conference_hall.jpg"
                            loading="lazy"
                            alt=""
                            className={styles.about_horizontal_image}
                            sizes="(max-width: 479px) 100vw, 418px"
                          />
                          <div className={styles.u_text_style_small}>
                            <em>
                              Host a professional event or a meeting at The Oberoi Rajvilas, Jaipur.
                            </em>
                          </div>
                        </div>
                      </div>
                      <div
                        key={idx}
                        className={styles.about_horizontal_artwork_wrapper}
                      >
                        <img
                          src="https://www.oberoihotels.com/-/media/oberoi-hotel/the-oberoi-rajvilas/rajvilas-new/Event/event/desktop_overview_1260x600/board_room.jpg"
                          alt={img.alt}
                          className={styles.about_horizontal_image}
                        />
                        <div className={styles.u_text_style_small}>
                          <em>Host a professional event or a meeting at The Oberoi Rajvilas, Jaipur.</em>
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
