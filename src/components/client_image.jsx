import "../css/service_image.css";
import Toronto from "../images/toronto.png";
import bomImg from "../images/bmo.png";
import saintLucia from "../images/saint-lucia.png";
import windsorArms from "../images/win.png";
import sf from "../images/sf.png";

const clientsData = [
  {
    clientTitle: "Bank of Montreal",
    gallery: [],
    imgUrl: bomImg,
    about: `BMO participated at Colission, the fastest growing Tech conference in North America 
      with 30,000+ attendees, with an exclusive Women in Tech Lounge. During the three 
      day event, BMO’s objective were:<br /><br />
      +Empower women, tech, communities and companies around the world<br />
      +Recruitment & Hiring<br />
      +Showcase BMO Innovation<br />
      +Support BMO Women in Technology<br /><br />
      Brandtalk Media custom designed two innovative 32” x 32” & 65” x 36” ft spaces with 
      interactive activations including a one of a kind hologram experience. We developed 
      ongoing in-booth stage programming, including panel discussions, fireside chats, 
      keynotes and interactive activities. The event hosted two of the largest activations at 
      the event. BMO ranked top 10% of companies favourited on the Colission app.`,
  },
  {
    clientTitle: "Saint Lucia Tourism Authority",
    gallery: [],
    imgUrl: saintLucia,
    about: `Brandtalk collaborated with the government of Saint Lucia to execute a compelling social 
      media campaign aimed at boosting tourism and raising awareness of the island in key 
      markets including Canada, USA, and the UK. Leveraging the new tagline #LetHerInspire, 
      we developed a 360 approach, unveiling a collection of 10 niche themed videos, over 200 
      captivating images, with a sweepstakes to win a 7-night stay in Saint Lucia. The strategic 
      plan included influencer partnerships, and targeted paid advertising. This comprehensive 
      campaign not only garnered significant attention but also earned Saint Lucia their first 
      industry digital award—an achievement reflecting the campaign's impactful success.<br /><br />
      <b>RESULTS</b><br />
      <b>Award</b> Caribbean Tourism Organization (CTO) Best Social Media Marketing Campaign<br />
      <b>Impressions</> 11M<br />
      <b>Sweepstakes</> entries 20k<br />
      <b>Social Media growth</b> 33%+ Facebook + 21%+ Instagram<br />`,
  },
  {
    clientTitle: "The Windsor Arms Hotel",
    gallery: [],
    imgUrl: windsorArms,
    about: `THE WINDSOR ARMS HOTEL 
      Covid-19 affected every global sector, with the hotel industry among the hardest 
      hit. The Windsor Arms Hotel tasked Brandtalk Media to create a campaign to drive 
      sales to the hotel which was in a government-mandated hotel quarantine. With the 
      challenge of the hotel closing all shared spaces including their only restaurant 
      known famously in Toronto for Afternoon Tea, Brandtalk launched a tea campaign 
      called “Mother‘s Day Tea-To-Go” encouraging guests to order and pick up a new 
      pre-packaged selection of tea, scones and sandwiches. Additional pre-packaged 
      full lunch meals from the restaurant were donated to shelters and hospital 
      front-line workers. The campaign was promoted heavily on social media with a 
      dedicated press release and media pitching resulting in coverage on Canada’s top 
      broadcast channels and newspapers. <br /><br />
      <b>$60,000+</b> in “Mother‘s Day Tea To Go” packages`,
  },
  {
    clientTitle: "Stonefield Villa Resort",
    gallery: [],
    imgUrl: sf,
    about: `Stonefield Villa Resort repositioned its product offering to target health and wellness 
      travellers following major renovations including a new fitness centre with indoor and 
      outdoor Yoga studio. Looking to drive awareness and bookings, Stonefield partnered 
      with Brandtalk Media to craft a targeted social media campaign. We curated a 
      series of images and short videos highlighting the resort’s rejuvenating facilities and 
      experiences. By strategically leveraging the new content across social platforms and 
      collaborating with wellness influencers, the campaign solidifying Stonefield Villa 
      Resort’s position as a premier Caribbean destination for health-conscious travellers.<br /><br />
      <b>Results:</>
      <b>Social Media Growth</b> 60K+
      <b>Impressions</b> 1M+`,
  },
  {
    clientTitle: "Toronto Caribbean Carnival",
    gallery: [],
    imgUrl: Toronto,
    about: `The Festival Management Committee (FMC), the producers of the Toronto Caribbean 
      Carnival is the largest cultural festival in North America. The committee was looking 
      for a fresh take on targeting millennials to drive sales across markets, create brand 
      awareness and attract new visitors to the City of Toronto.<br /><br />
      We executed a 360-degree Advertising Digital Campaign targeting Canada and the 
      United States. Over the course of three months, the Toronto CAribbean Carnival 
      Instagram increased by 7,000 followers. Thefeed was transformed with curated 
      content through social media influencers and celebrity collaborations including the 
      Real House Wives of Atlanta.<br/><br /><b>Major Events 8+</b> 
      <b>Attendees</b> 1M+
      <b>Impressions</b> 250M+`,
  },
];

function ClientImages() {
  return (
    <div className="service_image">
      {clientsData.map((client) => (
        <div key={Math.random()} className="card_">
          <div className="image">
            <img src={client.imgUrl} alt="" />
          </div>
          <div className="text">{client.clientTitle}</div>
        </div>
      ))}
      
    </div>
  );
}

export default ClientImages;
