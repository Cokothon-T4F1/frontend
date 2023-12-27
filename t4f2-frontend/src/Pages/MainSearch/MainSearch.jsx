import React from "react";

import * as T from "../MainSearch/MainSearch.style";

function MainSearch() {
  return (
    <T.Container>
      <T.IsText>Now Playing</T.IsText>
      <T.MusicImg src="/images/cm.png" alt="Image 4" />

      <T.IsText_2>수채화처럼 온 몸에 따스히 번지는 나의 봄</T.IsText_2>
      <T.IsText_3>Covered with the Reddish Sky</T.IsText_3>
      <T.Ir>
        <T.PlayImg src="/images/lp.png" alt="Image 1" />
        <T.PlayImg src="/images/pbtn.png" alt="Image 2" />
        <T.PlayImg src="/images/rp.png" alt="Image 3" />
      </T.Ir>
    </T.Container>
  );
}

export default MainSearch;
