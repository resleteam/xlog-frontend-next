"use client";

import Link from "next/link";
import axios from "axios";
import { useState, FormEventHandler, useEffect } from "react";
import SideImage from "../../../components/ui/homePage";
import { DM_Serif_Display } from "next/font/google";
import { z } from "zod";


const dM_Serif_Display = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
}


const posts: Post[] = [
  { id: 1, title: "Sunshine Days", author: "@Author1", date: "June 2024", tags: ["#science", "#science max"], content: "Lorem ipsum dolor sit amet. Qui earum ratione eos quia incidunt nam tempore commodi ut ipsum ipsam At voluptatum voluptatem vel ipsum voluptas. In modi reprehenderit eum nihil molestiae est voluptatibus sint sit odio doloribus non voluptatem iure in repellendus quos nam harum voluptatem. Sit accusantium provident vel autem praesentium cum dolores atque nam sequi sint aut dolores suscipit. Aut quia quod quo quisquam neque et dolore consectetur aut modi iste id nulla facilis hic ipsam inventore a ullam velit. Ut laborum nesciunt sed labore officiis aut voluptas voluptatem est dolore natus. Hic consequatur modi et repellat ipsam non deserunt rerum. Ut ullam molestiae id quaerat accusantium sit labore voluptas. Eos iste voluptas et eveniet ipsum qui quos vero a officiis natus eum molestias dicta nam dignissimos eveniet? Est mollitia fugit aut voluptates magnam a dolorem voluptatem qui voluptatem ducimus sit rerum repudiandae. Quo ipsam ipsa est rerum excepturi ea porro asperiores et doloribus nostrum ut voluptatem beatae rem soluta error. Ab molestiae eveniet est similique inventore non adipisci tempore quo voluptatibus quia sit reprehenderit praesentium. Et fugit eius eum sequi laborum et temporibus veritatis. Ut sapiente voluptas ea officiis repudiandae id voluptatem voluptatem ut perferendis sunt. Ut harum sint et repellendus fugit rem voluptas omnis a nihil quidem? Ut eveniet assumenda ut suscipit facere rem dignissimos illo qui recusandae omnis non sapiente blanditiis id eligendi quia. In quia neque sit deserunt architecto eum fuga odit ut voluptatem recusandae qui minus eveniet 33 voluptas facilis! Ut perspiciatis molestias non fugiat dolores ad soluta rerum ab asperiores totam. Et reprehenderit consequatur aut amet inventore et repellendus sequi. Aut nostrum tenetur sed quod repellendus vel voluptas ipsam est nostrum harum ex rerum voluptatibus non expedita nihil et quibusdam facilis. Aut voluptatibus laboriosam aut eaque dolor est iusto consequatur sed perferendis omnis sed doloremque laborum. Et repudiandae incidunt non praesentium quasi et soluta nemo ea similique sapiente et autem quia. Hic eveniet molestiae sit voluptatem aperiam et itaque esse." },
  { id: 2, title: "Ocean Breeze", author: "@Author2", date: "July 2024", tags: ["#science videos", "#science experiments that went wrong"], content: "<p>Lorem ipsum dolor sit amet. Aut harum voluptatem qui necessitatibus voluptatem aut consequatur cupiditate ut animi voluptas. Qui accusamus sint et cupiditate deserunt quo quibusdam consequatur et velit natus sed minima beatae. </p><p>Ut laborum nobis aut dolore dignissimos vel iusto adipisci eum minima cumque est suscipit dolores sed iusto aspernatur At provident fugit! Ut exercitationem esse ut totam adipisci aut sapiente minus qui facilis omnis. Sit fugiat laborum in velit nemo in autem soluta. Et consequuntur provident et maiores laudantium ut adipisci numquam non corporis distinctio ea ullam voluptatem? </p><p>Ut autem modi sed saepe iusto et omnis voluptatum qui autem reiciendis. Qui numquam accusantium ea delectus atque hic esse eveniet non quia rerum est consequuntur voluptatibus aut totam Quis. Et ratione nobis eos assumenda quibusdam et laborum obcaecati! </p><p>Id velit aspernatur ut debitis reprehenderit cum fugiat molestiae ad unde expedita et veritatis quidem non exercitationem eaque aut excepturi repellat. Hic pariatur nulla sed iusto facilis non suscipit placeat qui quis excepturi et magni adipisci. Qui rerum omnis ut distinctio quas a dolor cupiditate. Ea dolorem praesentium id consequatur esse qui voluptatem animi et ipsum sunt aut beatae corporis aut facilis placeat ex ipsam harum. </p><p>Sed corporis deserunt 33 corrupti omnis ex omnis enim est harum iure cum esse laudantium. Ea quia obcaecati aut dolorem minima et deserunt autem et earum exercitationem est quis pariatur. </p> "},
  { id: 3, title: "Serenity Falls", author: "@Author3", date: "August 2024", tags: ["#science documentary", "#sciencephile the ai"], content: "<p>Lorem ipsum dolor sit amet. Non mollitia animi eum autem nisi sit nihil voluptatem et labore asperiores aut voluptatibus blanditiis. Vel iusto porro et laboriosam debitis qui dignissimos aperiam! Est voluptatem quis quo magnam corporis qui aspernatur minima est quia possimus 33 nemo enim quo quis maiores est libero quia. Ut veniam eaque ut mollitia sint est praesentium neque et maxime pariatur. </p><p>Quo nihil sequi qui nulla quam nam ullam aspernatur. Qui quia architecto hic voluptatem enim eos voluptatem sunt. Id animi odio sed voluptas tempore quo officia autem et maiores nisi a consequuntur tenetur. </p><p>Aut veniam perspiciatis ut assumenda sint et ipsa obcaecati est minus suscipit aut beatae ullam sed expedita provident et dolores reiciendis. Sed voluptatem eius sit voluptates iure et quaerat aperiam? Ut vitae cumque At nulla modi aut animi dolore aut corporis quia. Aut quibusdam incidunt sed dolorum facere qui officia necessitatibus est explicabo magni eum quod dignissimos et optio itaque. </p><p>Aut eaque reiciendis id quaerat galisum et alias eveniet quo quia ipsum hic aliquid pariatur ad quia vitae. Ut adipisci dolorum est aperiam veritatis et officiis voluptates in voluptates porro est sapiente sint ad minima natus eum molestias nihil. </p><p>Est omnis nihil aut assumenda repudiandae eos consequuntur commodi. Sit ratione nihil est unde similique sit nihil internos ut minima molestias sed quia dolores aut quia corrupti sed molestiae doloremque. Qui voluptas nobis ut alias voluptate et omnis expedita. </p>"},
  { id: 4, title: "Dreamscape Chronicles", author: "@Author4", date: "September 2024", tags: ["#science documentary", "#science experiments for kids"], content: "<p>Lorem ipsum dolor sit amet. Est quia totam est possimus fugit eum optio debitis et voluptatibus galisum et minus sequi. Ut cupiditate delectus sit error dolor vel voluptatem nulla ea galisum nihil est quam provident ut sapiente Quis non vitae iusto. </p><p>Aut excepturi facere ea ratione consequatur ea laborum omnis 33 dolores nisi est internos sequi ut pariatur praesentium. Ut animi nobis et sint quia quo alias labore vel alias deleniti ut voluptatem quia. Aut quam unde ut fugit ullam eos dolorem excepturi sed illum quisquam. Aut earum similique ut dolore iure eos corrupti nulla aut saepe explicabo non architecto odit. </p><p>Non earum nihil sit fuga labore sit voluptatem tempore sed consectetur consequuntur ut ipsum autem non accusantium nesciunt et enim sint? Ut repudiandae suscipit et rerum minus At nulla vero cum pariatur asperiores sit minus sequi! Hic culpa saepe est tempore eius ut adipisci nihil cum aliquid veniam ut explicabo omnis. Non nulla nulla et tempora provident et nobis fuga et unde dolores ut culpa nihil sit asperiores itaque. </p><p>Quo maiores porro est quos consectetur id voluptates adipisci eum totam ducimus quo sapiente exercitationem ut voluptatem neque. Ea dignissimos dolore sit neque quibusdam ut praesentium natus vel laudantium deleniti. Ea ullam soluta id quisquam fugit qui molestiae voluptates eos quos iste qui perspiciatis officia aut tempore neque ut consequatur harum. Ut quidem ullam eum enim velit rem quae dolorem sed tenetur ipsum. </p><p>Sit quidem dolor et dolores deserunt est tenetur nemo ut dolor dolorem. A quidem impedit rem deleniti recusandae eum corporis omnis aut odio placeat. Et molestiae voluptate a ullam eius vel facilis culpa est sint galisum. Cum galisum nobis et unde quae ut recusandae cumque ea ullam recusandae et reiciendis sint a voluptatem vitae aut totam voluptas? </p>"},
];

const truncateText = (text: string, wordLimit: number) => {
  const words = text.split(' ');
  return words.length > wordLimit ? words.slice(0, wordLimit).join(' ') + ' ...' : text;
};

const ScrollList = ({ posts }: { posts: Post[] }) => {
  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);

  const toggleExpandPost = (postId: number) => {
    if (expandedPostId === postId) {
      setExpandedPostId(null); 
    } else {
      setExpandedPostId(postId);
    }
  };

  return (
    <div className="overflow-y-scroll text-white h-full w-full" style={{ marginTop: "50px", marginLeft: "-450px", maxHeight: '600px', width: "1050px", minWidth: "100px" }}>
      {posts.map((post: Post) => (
        <div
          key={post.id}
          className="mb-4 p-4 border border-gray-200 rounded flex-shrink-0 mr-4"
          style={{ maxWidth: '1050px', maxHeight: '600px', width: '100%' }}
        >
          <p>Author: {post.author}</p> <p>Date: {post.date}</p>
          <h2 className="text-lg font-bold" style={{color: "rgb(110,235,131)"}}>{post.title}</h2>
          <p>{expandedPostId === post.id ? post.content : truncateText(post.content, 100)}</p>

          <a className="hover:underline" style={{color: "rgb(110,235,131)"}} onClick={() => toggleExpandPost(post.id)}>
            {expandedPostId === post.id ? "Close" : 'Read more'}
          </a>
          
          <br></br>
          
          <div>
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block text-green-400 px-2 py-1 m-1 rounded-full border-2 border-green-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};


export default function Page() {
  const [showSuccessCard, setShowSuccessCard] = useState(false);

  useEffect(() => {
    const showSuccess = localStorage.getItem('showSuccessCard2');
    if (showSuccess === 'true') {
      setShowSuccessCard(true);
      localStorage.removeItem('showSuccessCard2');
    }
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showSuccessCard) {
      timer = setTimeout(() => {
        setShowSuccessCard(false);
      }, 4000); // 4 Seconds
    }
    return () => clearTimeout(timer);
  }, [showSuccessCard]);

  return (
    <div className="flex h-full divide-x-8 divide-secondary">
      <SideImage />
      {showSuccessCard && (
        <div className="absolute top-0 right-0 mt-4 mr-4 bg-green-500 text-white p-2 rounded">
          Success!
          <br />
          Logged in.
          <svg version="1.0" xmlns="http://www.w3.org/2000/svg" width="60" height="50" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet" style={{ marginLeft: "100px", marginBottom: "1px", marginTop: "-50px" }}>
            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
              <path d="M2508 4931 c-45 -15 -87 -50 -108 -91 -17 -33 -20 -59 -20 -159 l0 -120 -57 -11 c-340 -67 -615 -216 -843 -457 -246 -260 -385 -581 -410 -948 -5 -71 -9 -417 -10 -767 l0 -638 -140 -192 c-80 -110 -149 -217 -161 -248 -29 -73 -31 -203 -6 -280 38 -116 132 -216 247 -263 53 -21 68 -22 456 -25 l401 -3 17 -59 c27 -91 83 -177 176 -271 71 -72 100 -94 180 -133 126 -61 200 -79 330 -79 130 0 204 18 330 80 79 39 109 61 180 132 88 88 151 190 181 289 l12 42 376 0 c410 0 450 4 540 57 144 84 232 270 202 429 -18 97 -38 135 -185 336 l-136 186 0 629 c0 665 -8 858 -39 1001 -81 369 -285 685 -589 910 -187 138 -382 222 -634 272 l-58 11 0 120 c0 139 -15 182 -78 224 -41 27 -112 39 -154 26z m178 -736 c94 -9 238 -51 341 -100 357 -169 596 -494 653 -890 6 -42 10 -370 10 -812 0 -474 4 -751 10 -768 6 -15 80 -123 165 -240 153 -210 171 -245 143 -273 -17 -17 -2879 -17 -2896 0 -28 28 -10 63 143 273 85 117 159 225 165 240 6 17 10 294 10 768 0 752 3 815 40 957 117 454 526 804 993 849 80 8 97 8 223 -4z m174 -3486 c-21 -38 -91 -98 -148 -126 -50 -25 -68 -28 -152 -28 -84 0 -102 3 -152 28 -57 28 -127 88 -148 126 l-11 21 311 0 311 0 -11 -21z"/>
              <path d="M1205 4826 c-42 -19 -198 -159 -282 -254 -293 -331 -478 -708 -553 -1123 -28 -159 -45 -403 -31 -456 23 -83 93 -135 181 -135 114 1 180 83 180 222 0 105 18 250 47 380 84 379 280 718 577 995 68 63 119 119 125 137 44 125 -42 249 -171 248 -24 -1 -56 -7 -73 -14z"/>
              <path d="M3765 4826 c-64 -29 -105 -94 -105 -165 0 -68 18 -95 136 -205 236 -222 410 -483 513 -773 67 -186 111 -427 111 -603 0 -139 66 -221 180 -222 88 0 158 52 181 134 14 52 -3 301 -31 455 -82 456 -305 880 -635 1208 -155 154 -189 178 -263 182 -34 2 -69 -2 -87 -11z"/>
            </g>
          </svg>
        </div>
      )}
      
      <div className="flex-1">
        <div className="bg-primary w-full h-full flex justify-center items-center">
          <div className="mx-auto max-w-screen-2xl px-4 w-full md:px-8 max-w-lg">
            <div className="mx-auto w-3/4 h-full relative">
              <span style={{ position: 'absolute', left: '-450px', top: '-60px', color: "rgb(110, 235, 131)", fontSize: "35px" }}>Latest</span>
              <ScrollList posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}