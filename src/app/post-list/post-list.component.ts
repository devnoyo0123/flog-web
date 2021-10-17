import { Component } from '@angular/core';
import { PeriodKind } from './interfaces/period-kind';
import { Post } from '../post/interfaces/post.schema';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.less'],
})
export class PostListComponent {
  selectedPeriod: 'day' | 'week' | 'month' | 'year' | undefined;
  posts: Post[] = [];
  periodTypes: PeriodKind[] = [
    { value: 'day', label: '오늘' },
    { value: 'week', label: '이번 주' },
    { value: 'month', label: '이번 달' },
    { value: 'year', label: '올해' },
  ];

  constructor() {}

  ngOnInit() {
    const [firstKindOfPeriod] = this.periodTypes;
    this.selectedPeriod = firstKindOfPeriod?.value;
    this.loadPost();
  }

  loadPost() {
    const loadedPosts: Post[] = [
      {
        title: '쏘카, 두나무, 카카오VX 면접 후기',
        content: `> **해당 포스팅은 2021년 제 12기 모집 기준 수기이므로 참고만 하시기 바랍니다!**\\n\\n# 소프트웨어 마에스트로 지원 동기\\n우선 그냥 **멋있어 보였다**. 페이스북 프로필에 'SW 마에스트로 제 11기 수료생' 이런식으로 적혀있으면 왠지 모르게 **대단해 보였다**. 그리고 평소에 눈여겨 봤던, **대단하고 멋진 사람들은 보통 소마 출신**이기도 했다. 상당한 상관 관계가 있어 보였다. **소마 출신 개발자들은 모두 멋있어 보였고, 멋있어 보였던 개발자들은 대개 소마 출신이었다**. 소마에 대해서 잘 몰랐을 때에도, 수많은 지원자들 사이에서 엄청난 경쟁률을 뚫고 합격한 엄선된 개발자들인건 알고 있었기 때문에 당연히 대단해보일 수 밖에 없었다.\\n\\n그렇게 필자는,\\n> ** '그럼 나도 멋있는 개발자가 되기 위한 첫 걸음으로, 소마에 지원해봐야겠다'**\\n\\n\\n라는 단순한 생각에서 SW 마에스트로에 대해서 자세히 알아보며 소마 연수생으로 활동하게 된다면 어떤 것을 배우고 얻을 수 있는지, 합격을 위해 어떤 전형을 거쳐야하고 어떻게 준비를 해야하는지 조사했다. \\n\\n사실 **조사를 하면 할 수록 더더욱 엄두가 안 났던 것은 사실**이다. (제 11기 기준) 대기업처럼 서류 통과를 하고 코딩테스트 2번을 거치고, 면접까지 뚫어야 합격을 할 수 있다는 것부터가 심리적으로 압박이 심했다. 소마 출신 개발자들이 더더욱 빛나고 대단해보이는 시점이었다.\\n\\n**'이걸 내가 어떻게 해..'** 라는 생각이 단연 머릿속에서 떠나질 않았다. 평소에 본인 실력에 자신이 없었던 것은 물론, **과거 기수 소마 합격 수기 포스팅들을 보면** **'아.. 이런 사람들이 붙는거구나'** 하는 생각밖에 안 들 만큼 대단한 사람들이 작성한 포스팅이었기 때문이다. \\n\\n>_'저는 4년 동안 **알고리즘 공부**를 해왔고...',\\n'**사용자 수 10만 명**을 보유하고 있는 서비스를 운영하고 있는...'\\n'저는 **해커톤 및 공모전에서 11번 정도 수상**해보았으며...'_\\n\\n![](https://images.velog.io/images/haero_kim/post/81180ca3-f5bd-4162-b13b-7f53fb5ea39b/fa3010a4fe6d85218decf1de6ccaae38.gif)\\n\\n이런 사람들이 합격했다는데 보잘 것 없는 **내가 비비기나 할 수 있을까**라는 생각이었다. \\n\\n하지만 불현듯, **준비해서 나쁠 건 없다**는 생각이 들었다. 막말로 모든 걸 다 던져두고 SW 마에스트로 준비를 하더라도 개발자로서의 **역량을 기르기에 충분한 기회**라고 생각되었다. 자기소개서 작성, 알고리즘, 웹, SQL, 면접 준비까지 모두 해볼 수 있기 때문이다.\\n\\n그렇게 필자는, **제 12기 SW 마에스트로에 도전해보기로 했다.**\\n\\n# 자소서는, 자소서를 가장한 부메랑이다\\n한참 소마 지원 팁 등을 찾아보며 자기소개서는 어떻게 써야할 지 갈피를 잡고 있을 때, 사람들은 이런 말들을 해주곤 했다. **자신이 SW 마에스트로에 지원하기 전에 어떤 것을 해왔고 (프로젝트 경험 등) 자신이 SW 마에스트로에 꼭 합격해야하는 이유 등을 자연스럽게 풀어내라**고 한다.\\n>_'지금까지 해왔던 것을 자세하게 아낌없이 풀어내라', 'SW 마에스트로의 인재상에 맞추어 작성해라' 등등_ \\n\\n다 맞는 말이지만 합격 후에 돌아보니 필자 생각에 자기소개서 작성을 할 때 가장 신경써야할 점은, **자소서가 곧 나의 면접 질문지 라는 점**이다. **자신에게 오는 질문은 거의 자소서로부터 나온다.** 위에 적어놓은 조언들보단, 이 말이 더욱 갈피를 잡기 쉬울 것이다.\\n\\n내가 지금 작성하고 있는 **자기소개서가 면접 질문 목록**이라고 생각하면, 당연하게도 내가 **자신있게 대답할 수 있는 질문들을 유도하기 위한 자기소개서**가 완성될 것이다. 예를들면 이러한 시나리오다.<br><br>\\n\\n1. 가장 경험에 남는 **프로젝트 경험을 서술하며** 자연스럽게 자신이 **Android 개발자임을 밝힌다.**\\n\\n2. 면접관님들은 해당 **프로젝트 경험과 Android 앱 개발이라는 기술 스택에 초점**을 맞춘다.\\n3. 해당 프로젝트를 진행하며 **느꼈던 점, 어려웠던 점, 배운 점** 등을 물어보실 거고 Android 앱에 대하여 **얼마나 잘 알고 있는지, 얼마나 능숙한지** 등을 물어보는 질문을 하실 것이다.\\n\\n4. 당연하게도 그것들에 대해선 **자신이 가장 잘 알고 있기 때문에** 답안지마냥 미리 대비할 수 있고, 또 **자신있게 대답하면서 자연스럽게 면접장에서 분위기를 끌어오며 자신을 어필**할 수 있다.\\n<br>\\n\\n따라서 자신이 **'이것만큼은 보여줘야한다', '이것만큼은 뽐내고 싶다'** 등의 **장점이나 특별한 경험**이 있다면, 면접에서 자연스럽게 풀어낼 수 있도록 자기소개서에 **'저한텐 이런거 질문해주세요' 하듯이 써서 내면 된다.**\\n\\n자기소개서를 양식에 맞게 꽉 채워서 낸다기 보다, 양과 상관없이 위의 말대로 **핵심만 갖추고 있으면 된다고 생각**한다. 실제로 필자는 몇몇 항목의 경우 **제한 글자 수의 1/3 도 안 채우고 냈다.**\\n\\n![](https://images.velog.io/images/haero_kim/post/a19c3c50-bf6d-45fd-a4b7-676af8d5a56a/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-06%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.22.12.png)자기소개서에 _**'어제 피자를 먹었는데 맛있었습니다.'**_ 같은 것만 안 적으면 서류전형은 통과하는 것 같다. 본격적인 전형은 이제부터다. 서류 합격 메일이 오면 1차 코딩 테스트를 앞두게 된다. \\n\\n# 1차 코딩 테스트 : 최소한의 예의 확인\\n그렇다. 필자가 느끼기에 1차 코딩 테스트는 SW 마에스트로에 지원하기 위한 **최소한의 예의를 갖추고 있는지를 확인**하는 전형으로 느껴졌다. **소프트웨어 개발에 뜻이 있는 사람**들이라면 당연하게도 **알고리즘 문제를 풀어왔을 것**이고, 문제를 많이 풀진 않았더라도 **최소한의 알고리즘 공부는 했을 것**이다. 이를 노렸는지, **'개발자의 길을 걷고 있다면 이정도는 풀어야지?'** 하는 느낌의 문제들이 나왔다.\\n\\n온라인 코딩 테스트는 **[엘리스](elice.io)**라는 플랫폼으로 진행했다. ~~(이 플랫폼 역시 소마 출신의 개발자가 창업한 것이다)~~ 전 기수 제 11기 때는 구름이라는 사이트를 활용했다고 하는데, 당시 시험 환경에 문제가 많이 발생해서 사람들의 불만에 의해 플랫폼을 바꾼 것 같다. 안 그래도 떨리는 시험에 서버까지 터져버리면 패닉이 왔을 것 같다.\\n\\n아무튼 엘리스로 1차 코딩 테스트를 치루게 되었는데, **IDE 사용은 허용**이 되었다. 자신에게 **익숙한 IDE 환경에서 코드를 작성하고 테스트**해보며, 최종본 코드를 엘리스 코드 에디터 창에 **복붙해서 제출하면 된다. **\\n\\n\\n제 12기 기준, 1차 코딩 테스트 문제는 아래와 같이 나왔다.\\n> **알고리즘** : 6문제\\n**SQL** : 1문제\\n**WEB** : 1문제\\n\\n전년도에는 1차 코딩테스트 때 알고리즘 문제가 3문제 나왔다고 했었는데, **3문제가 더 나온다고 해서 살짝 당황했던 기억이 있다.** 제한시간은 달라지지 않았는데 문제 수가 늘어났기 때문이다. 그만큼 난이도는 하향 평준화 되었겠지만 **문제 수가 많다는 사실만으로도 심리적 압박감이 심했다.**\\n\\n## 1. 알고리즘 문제\\n기억나는 알고리즘 문제 유형은 아래와 같은 것들이 있다. (규정 상 기출문제를 알려주진 못한다.)\\n> **DFS, 브루트 포스, 구현, 분할정복** 등\\n\\n유형 자체는 **평소에 알고리즘 공부를 해두었다면 다들 알고 있을 유형**이다. 그리고 해당 유형들을 알고 있다면 쉽게 접목하여 풀 수 있게끔 문제가 나왔던 것 같다. ~~(물론 소마 준비생 오픈채팅방 사람들이 그렇게 말했고, 필자는 알고리즘이 매우 취약하기 때문에 마냥 쉽지만은 않았다 ㅠㅠ)~~\\n\\n문제 순서가 너무했던 게, **1번 문제가 가장 어려웠다.** 필자는 이를 단번에 알아채고 2번 부터 풀었다(?). 문제는 전체적으로 **체감상 [solved.ac](https://solved.ac/) 기준 실버3 - 골드3 사이 난이도**에서 골고루 나왔던 것 같다.\\n\\n참고로 필자는 약 4개월 전부터 1차 코테까지 **백준에서 약 200문제 밖에 못 풀었던 상황**이었지만, 그래도 다 풀긴 풀어서 낼 수 있었다. 제출 시 정답 여부가 안 나오지만, 많은 테스트케이스를 통과하지 못했을 것 같다. \\n\\n## 2. SQL 문제\\n필자는 **SQL 쿼리문에 대해 문외한**이었지만, 1차 코딩 테스트 5일 전에 **[프로그래머스](https://programmers.co.kr/learn/challenges?tab=sql_practice_kit) 사이트의 SQL 고득점 키트**를 모두 풀어봤다. 실제로 1차 코딩 테스트 문제 풀이에 **엄청 도움이 됐다.**\\n\\n출제됐던 문제는 **\`\`JOIN\`\`, \`\`WHERE\`\` **문을 사용할 줄 알면 단 번에 풀 수 있었던 난이도였다. \\n\\n만약 SQL에 대하여 무지하다면, **프로그래머스 문제를 꼭 1회독 이상 해보는 것을 추천**한다.\\n\\n## 3. WEB 문제\\n사전에 **\`\`HTML\`\`/\`\`CSS\`\`/\`\`JS\`\`** 범위 내에서 나온다고 공지가 됐었다. 기본적으로 **웹 기초를 알고 있는 사람들이라면 어렵지 않게 풀 수 있는 범위**다. 만약 기초도 모르는 사람들이라면 [생활코딩](https://opentutorials.org/)의 웹 기초 강의를 추천한다.\\n\\n출제됐던 문제는 **\`\`\`CSS\`\`\`** 속성을 변경하고 적용할 줄 아는지를 물어보는 문제였다.\\n\\n작년(11기)에는 **Javascript 로 API 를 호출하여 비동기 처리**를 하는 문제가 나왔다고 해서\\n**살짝 쫄았던 상황**이었는데, 문제를 보자마자 **안심했던 기억**이 있다.\\n<br>\\n\\nSQL 이나 웹 문제는 모두 맞춘 것 같았지만, 다른 사람들에 비해 **알고리즘(PS)이 취약하다고 생각했기 때문에 합격할 자신이 없었다.** 특히 소마 준비생 오픈채팅방에선 다들 문제가 너무 쉬웠다고 하길래 나만 좀 어려웠나 하는 생각이 들었다. **따라서 평소에 더더욱 알고리즘을 열심히 해야겠다는 생각이 들었다.**\\n\\n![](https://images.velog.io/images/haero_kim/post/d6af7808-8990-4cd7-8674-61d9f3576375/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-04-06%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%203.26.22.png)그래도 운이 좋았는지, **1차 코딩테스트를 통과**했다. 합격할 줄 몰랐어서 더더욱 기뻐했던 기억이 있다.\\n\\n당연하게도 **평소에 알고리즘 문제를 열심히 푸는게 베스트**지만 필자처럼 진작 알고리즘 공부를 해두지 않은 사람들의 관건은 **부분 점수를 얼마나 잘 챙기냐**인 것 같다. \\n\\n필자는 어려운 문제의 경우 어떻게든 코드 제출이라도 하려고 **자기가 만든 테스트 케이스정도는 통과하는 코드를 짜서 냈고, 부분 점수들을 잘 챙겨서 그런지 합격할 수 있었던 것 같다.**\\n\\n\\n\\n# 2차 코딩테스트 : 예의는 있네? 이건 몰랐지?\\n\\n1차 코딩테스트와 다르게, 2차 코테 때는 **'화면 녹화'**를 진행했으며, **인터넷 사용이 허용되지 않았다. **또한 **듀얼 모니터도 사용을 제한**했다. 환경이 제한되는 것만으로도 난이도가 올라갔다고 볼 수 있다. \\n\\n## 1. 알고리즘 문제\\n1차 때와 다르게 알고리즘 문제가 **총 3문제**만 나왔다. **'짧고 굵게 판가름 한다는 건가..' 하며 쫄았다.\\n**\\n마찬가지로 규정상 기출문제를 직접적으로 알려줄 순 없지만, 한 가지 말해줄 수 있는 것은 2차 코테가 결국 **'1차 코딩테스트'의 확장판**이었다는 사실이다.\\n\\n> DFS & BFS, 분할정복 등\\n\\n몇몇 문제는 '1차 코딩테스트' 때 출제됐던 문제에 '추가적인 요구사항'에 맞춰 확장해서 구현하는 문제가 나오곤 했다. 한 마디로 **응용 문제**가 출제된 것이다. 딱 이 문제들을 보자마자 이런 후회가 밀려오곤 했다.\\n\\n_**'아... 1차 코테 문제를 좀 복기해볼 걸...'**_\\n\\n아무튼 분명 1차 문제를 복기해봤다면 더욱 수월하게 풀었을 것만 같은 문제들이 여럿 나왔다. 이러한 문제들을 제외하고는 1차에 비해 난이도가 그렇게 올라가진 않았었다.\\n\\n\\n## 2. SQL 문제\\n**1차, 2차 코테를 모두 응시한 필자**가 보기엔 SQL 문제는 정말 **최소한의 지식**만 물어보는 것이 맞는 것 같다. 2차 코딩테스트의 SQL 문제 역시 **기본 쿼리문만 제대로 알면 누구나 풀 수 있는 문제**였다.\\n\\n1차 때와 조금 다른 점은 주어지는 테이블이 더 많아서 복잡하게 느껴질 수 있다 정도? \\n\\n역시 **\`\`JOIN\`\`** 문을 잘 활용하는 것이 관건이었다. 소마 코테 **1주일 전 프로그래머스 SQL 문제 1-3회독은 국룰인 것 같다.\\n**\\n\\n## 3. WEB 문제\\nWEB 문제가** 1차 코테에 비해 난이도가 조금 올라갔던** 것 같다. 물론 이렇게 말해봤자 웹을 조금이라도 건드려 본 사람이라면 **누구나 풀 수 있는 수준이었다.**\\n\\nJ**avaScript 를 통해 CSS 속성을 조작**하는 느낌의 문제가 나왔었다. 이것또한 11기 코테 기출문제보다는 훨씬 쉬운 난이도였다고 생각한다.\\n<br>\\n\\n필자는 **SQL, WEB 은 확실히 다 맞았다고 자신**했지만 역시 **알고리즘 문제 때문에 합불 여부가 불확실**했었다. 한 문제는 아예 손도 못 댔고, 풀었다고 생각한 문제들은 시험이 끝나고 **수많은 예외 입력**들이 떠오르며 _**'아차' **_했다. 아쉬움 그 자체였다.\\n\\n> **제발 부분점수 좀 두둑히 챙겨주십쇼... ~~(거의 기도메타)~~**\\n\\n사실 그래서 별 기대를 안 했다. 소마 12기 준비생 오픈 카톡방이 워낙 뛰어나신 분들이 모여있어서 그런 것일지도 모르겠지만, **다들 코테가 너무 쉬웠다며 올 솔브도 몇몇 보이곤 했다** (ㅠㅠ). 그 톡방의 알림을 받아보기만 해도 자신감이 뚝뚝 떨어졌다.\\n\\n<br>\\n그렇게 시간이 지나 발표 당일,\\n\\n![](https://images.velog.io/images/haero_kim/post/792deea6-3576-4a55-84d8-c8c84d8274da/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-05-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%202.49.12.png) ![너무좋아](https://images.velog.io/images/haero_kim/post/4de8cca5-e2b1-48b1-99d3-2bdb8c33d0cf/giphy.gif)진짜 믿기지가 않았다. **그야말로 너무 행복했다!!** 기대를 하지 않았던 만큼 더욱 기뻤다. 정말 기도한대로 (?) 부분 점수가 잘 반영이 된 것 같았다. 한 편으로는 **스스로 부족함을 워낙 잘 느꼈기 때문에, 오히려 확실한 동기부여가 되기도 했다**.\\n\\n\\n\\n\\n## 코딩테스트 요약\\n> 1. HTML / CSS / JS 를 한 번이라도 다뤄본 사람들은 **따로 더 공부할 사항은 없다**. 다만 본인이 완전 웹알못이라면 [생활코딩](https://opentutorials.org/) 등의 사이트를 활용하자.\\n\\n> 2. **[프로그래머스](https://programmers.co.kr/learn/challenges?tab=sql_practice_kit)**의 SQL 고득점 키트만 풀어봐도 **소마 코테의 SQL 문제는 쉽게 풀 수 있다**. (기존에 SQL을 다뤄본 사람들에겐 꽁 문제다.)\\n\\n> 3. 알고리즘 문제는 solved.ac 기준 **골드 이상  티어라면 걱정없이 풀 수 있을만한 난이도**이다. 만약 문제가 어렵더라도 최대한 손을 대보는 것이 관건이다. 부분점수가 적용되는 점을 최대한 활용하자.\\n\\n\\n그렇게 필자는 면접 관련 일정을 안내받았고, 막상 2번의 코딩테스트를 통과하니 잊고 있었던 가장 큰 벽을 마주친 느낌이었다.\\n\\n# 최후의 관문 : 면접\\n![](https://images.velog.io/images/haero_kim/post/6f736d42-8e0d-4e15-b945-1dece7dbe5ec/giphy%20(1).gif)\\n\\n이런 프로세스에서 **면접만큼 떨리는 전형이 없다**. 코딩 테스트를 연달아 2번 볼 때는 면접의 존재조차 잊어버린 채 문제 푸는데에 급급했다. 그래도 나름대로 예상 질문 목록을 만들어보며 약 **일주일 동안 면접을 준비**했다.\\n\\n이 글의 첫 순서에 자기소개서를 **'부메랑'** 이라고 표현한 바 있다. **괜히 이 말을 하는 것이 아니다.**\\n\\n이 글을 말 그대로 회고가 아닌 **'합격 수기 및 꿀팁' **을 다루는 포스팅이다. ~~운좋게~~ 합격을 해본 사람입장에서의 자기소개서는 사실 **본인이 '면접 질문'을 정할 수 있는 주문서**와도 같다. 그러므로 사실** 자기소개서를 쓸 때 이를 염두해두는 것이 가장 중요**하다.\\n\\n## 관건은 분위기 휘어잡기\\n소마 면접은 다대다 면접으로, 필자같은 경우 5(면접관) 대 5(준비생) 면접이었다. (~~실은 가물가물하다~~) 정말 잔인하지만, 그 속에서 살아남으려면 **면접 분위기를 자신이 주도하는 것이 최고**다.\\n\\n면접 분위기를 자신이 주도한다는 말은, **자신이 면접관들의 꼬리질문을 유도하고 알게 모르게 본인 어필을 하는 분위기**를 만드는 것을 의미한다.\\n\\n이는 '**자기소개서**'를 통해서 미리 설계할 수 있다. 자기소개서를 통해 **본인이 개발 역량을 강화하기 위해 어떤 활동들을 해왔고, 무엇을 가장 잘 하는지**에 대해 충분히 어필을 하면 **면접관들은 자소서만으로 알 수 없는 무언가에 대해 물어보기 마련**이다.\\n\\n그래서 **다양한 프로젝트 경험, 주 스택 활용 능력 등을 자소서에 녹이는 것이 중요한 것**이다.\\n\\n예를들어 자소서에 '안드로이드'가 주 스택이라고 작성했다면, 아래와 같이 면접이 진행될 것이다.\\n\\n> 🤷🏻‍♂️ : 안드로이드가 주력이시군요! 혹시 최근에 살펴봤던 안드로이드 최신 기술이 있다면 설명해주실 수 있나요?\\n\\n_A. 아, 저는 최근에 Android Jetpack Compose 라는 것에 대하여 살펴보았는데요, Compose 는 Swift UI 나 Flutter 의 UI 구성 방식과 비슷하게 프로그래매틱하게 UI 를 작성할 수 있는 기술입니다. 기존 XML 기반 UI 구성 방식에 익숙해져서 생소한 개념으로 보였지만, 조금만 익숙해지면 적은 코드로 빠르게 UI 를 쉽게 작성할 수 있고 유지보수에도 용이한 것 같아 천천히 익혀보고 있습니다._\\n\\n> 🤷🏻‍♂️ : 그렇군요, Flutter 와 방식이 비슷하다고 하신 걸 보니 Flutter 또한 해보신 경험이 있으신 것 같아요. Flutter 와 네이티브 앱 개발의 가장 큰 차이는 무엇인가요?\\n\\n_A. 넵 Flutter 도 가볍게나마 다뤄본 적이 있습니다. 제가 느끼기에 둘의 가장 큰 차이점은, 네이티브 앱의 경우 하드웨어 레벨의 기능 (센서 등) 을 이용하기에 적합하지만 그에 비해 Flutter 는 아직 이러한 부분에 대해서는 SDK 가 부족하다고 느꼈고, 또한 ... _\\n<br>\\n이런 식으로, 잠시나마 **면접의 분위기를 자연스럽게 '자신'을 중심으로 이끌어나갈 수 있다**. 그 과정에서 본인의 역량을 충분히 어필할 수 있고, **얼마나 자신이 있는지도 맘껏 드러낼 수 있는 절호의 기회** 그 자체다.\\n\\n따라서 자기소개서에 **이러한 것들을 유도하는 것이 가장 중요하고**, 그렇게 자소서를 작성했다면 면접 역시 **자소서를 기반으로 준비**하면 되는 것 같다.\\n\\n그 외에, 공통적으로 받았던 질문들은 아래와 같다. 공통질문은 따로 준비를 해서 이득을 볼 건 없고, 본인의 임기응변 능력을 믿어야 한다.\\n> **공통질문**\\n자기소개, 지원동기는 국룰이니 알아서 짧고 굵게 잘 준비해야 한다.\\n\\n1. 각자 최근에 알게된 (습득한) **테크 신기술을 설명**해달라!\\n\\n2. 개발 능력을 제외하고, 본인이 남들과 다르게 어떠한 역량을 기르기 위해 **따로 하고 있는 노력이 있나?**\\n\\n3. 코로나19로 인해 **몰락한 관광 산업을 IT 적으로 접근하여, 다시 부흥시켜줄 수 있는 아이디어**가 떠오르면 자유롭게 얘기해달라 (대답 안해도 된다고 하셨음)\\n\\n**자기소개를 장황하게 준비한 분이 계셨는데, 너무 길어서 면접관님들의 표정을 보니 다들 지루해 하신 기억이 있다**. 공통질문의 팁이라고 하면 팁인데, 자기소개 및 지원동기는 **짧지만 임팩트있게 본인을 어필하는 것이 중요**한 것 같다.\\n\\n아, 그리고 원래 소마 면접은 **'2차 코딩테스트' 코드리뷰가 무조건 진행**되는 것이 맞다. 그런데 **특이하게 필자가 들어간 면접실은 그런 질문을 하지 않으셨다**. ~~(너무 성적이 안 좋아서 그런가 ㅠㅠ)~~\\n\\n따라서 항상 이런 글은 **참고로만** 알아두는 것이 좋다. (심지어 자리에 2차 코딩테스트 문제를 인쇄물로 하나씩 놔주셨는데, 관련해서 질문이 일절 없었다)\\n\\n또한, 면접이 끝나고 준비생 오픈 카톡방을 보니 **CS 질문을 많이 한 면접실**도 있었다. 정말 케바케인 것 같다.\\n\\n## 면접 요약\\n> 1. **자기소개서를** 중점으로 준비하면 된다.\\n> 2. **CS 지식**을 물어보는 경우도 있다.\\n> 3. 2차 코딩테스트 **코드리뷰를** 대비해야 한다.\\n> 4. **면접 분위기를 휘어잡는 것**이 가장 중요하다.\\n\\n\\n\\n![](https://images.velog.io/images/haero_kim/post/78a27874-7589-42c0-8d27-a3d6bd704d24/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202021-05-12%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%204.11.27.png)\\n\\n최종 합격 메일을 받고 온 동네방네 자랑을 해댔다.\\n\\n웬만한 질문들을 침착하게 다 답변했어서 그런지, 면접관 분들이 좋게 봐주신 것 같다. 정말 다행인 것 같다.\\n\\n\\n정말 꿈꿔왔던 대외활동에 합격을 했기 때문에 역대급으로 기뻤고, 또 **많은 전형 절차를 거쳐 최종 합격을 했다는 점이 엄청나게 뿌듯**했다. 후에 들은 이야기지만, **역대급 경쟁률**을 찍었다고 한다. 그래서 그런지 더욱 뿌듯했다 ㅎㅎ\\n\\n소마 12기 **준비를 하면서 수많은 블로그를 뒤져봤고, 어떻게 준비해야 좋은 지 죽도록 찾아봤다**. 같은 맥락으로, 다음 기수 그리고 다다음 기수를 **준비하는 사람들에게 조금이나마 도움을 주고 싶은 마음**에 이 글을 작성하게 됐다.\\n\\n#### 소마 출신 개발자들은 모두 멋있어 보였고, 멋있어 보였던 개발자들은 대개 소마 출신이었다\\n필자 또한, 역대 소마 연수생들에게 누를 끼치지 않도록 열심히 활동하여 누군가에게 **'멋있어 보이는' 개발자가 되어야 겠다는 다짐으로 열심히 활동**하고 있다.\\n\\n#### 모두들 열심히 준비하여 좋은 성과를 거두었으면 하는 바람이다. \\`,
        thumbnail:
          'https://media.vlpt.us/images/haero_kim/post/cd5341fe-6ada-4c75-b888-0c1b340a0d1b/면접후기png.png?w=640',
        createdAt: new Date('2021-10-01'),
        user: {
          name: 'haero_kim',
          thumbnail:
            'https://media.vlpt.us/images/haero_kim/profile/fa67c66b-a190-404c-9c1b-10549038868f/social.jpeg?w=120',
          likes: 90,
        },
        comments: [],
      },
      {
        title: 'Instagram 새 스토리 animation',
        content: `캔버스를 이용해 instagram 새 스토리에 animation을 만들어 봅시다.`,
        thumbnail:
          'https://media.vlpt.us/images/catca/post/f2f496dd-b63e-47bd-a92c-e4a604e22c9f/storyProfile2.png?w=640',
        createdAt: new Date('2021-10-02'),
        user: {
          name: 'catca',
          thumbnail:
            'https://media.vlpt.us/images/catca/profile/ea388619-6be0-46ce-9c4f-a387b933a64c/social.jpeg?w=120',
          likes: 15,
        },
        comments: [],
      },
    ];
    this.posts = [...this.posts, ...loadedPosts];
  }
}
