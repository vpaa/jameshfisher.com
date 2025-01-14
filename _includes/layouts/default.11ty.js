const { format } = require('date-fns');

const renderTitle = require('../../renderTitle.js');

exports.data = {
  layout: 'layouts/minimal'
};

exports.render = function(data) {
  const author = data.author || 'jim';

  return `
      ${ data.external_url ?
        `<p>
          <strong>
            <a href="${data.external_url}">
              This post is published externally at
              ${data.external_url}
              <img src="/assets/Icon_External_Link.svg" alt="external link" />.
            </a>
          </strong>
        </p>` : ''
        }
      ${data.content}
      <div class="noprint">
        <a href="https://tigyog.app" target="_blank" style="color: #1f2547;">
          <div style="background-color: #f8f9fc; border: 2px solid #dbdff0; border-radius: 0.5em; margin-top: 1em; padding: 1em;">
            <img src="/assets/tigyog/icon.svg" style="width: 5em; float: right; margin-left: 1em;"/>
            <div>
              I just released <strong>TigYog</strong>:
              interactive tutorials on coding, math, crypto, science!
              Learn from wizards, or write your own quizzes!
              What&rsquo;s your bag?
            </div>
            <div style="padding-top: 1em;">
              <a target="_blank" href="https://tigyog.app/lessons/wtvuar2v9way/r/the-one-time-pad"><button class="tigyog-button">Coding</button></a>
              <a target="_blank" href="https://tigyog.app/lessons/d1aswpgezqw6/r/the-quadratic-formula-a-tutorial"><button class="tigyog-button">Math</button></a>
            </div>
            <div style="clear: both"></div>
          </div>
        </a>
        <style>
          .tigyog-button {
            border: 2px solid #dbdff0;
            padding: 8px 16px;
            border-bottom-width: 4px;
            border-radius: 4px;
            background-color: white;
            cursor: pointer;
            transition: border-color 0.2s ease-in-out;
          }
          .tigyog-button:hover {
            border-color: #9fa8d6;
          }
        </style>
        <h3>More by Jim</h3>
        <p class="posts">
          <ul>
            ${ data.collections.fave
                .map(post => `<li><a class="post" href="${post.external_url || post.url}">${renderTitle(post.data.title)}</a></li>`)
                .join('') }
          </ul>
        </p>
      </div>
      <p>
        Tagged ${(data.tags||[]).map(tag => `<a class="post" href="/tag/${tag}">#${tag}</a>`).join(', ')}.
        ${ author === 'jim' ?
           `All content copyright James Fisher ${format(data.page.date, 'yyyy')}.
           This post is not associated with my employer.` : ''
        }
        <span class="noprint">
          <a href="${ new URL(data.page.inputPath, 'https://github.com/jameshfisher/jameshfisher.com/edit/master/').href }">Found an error? Edit this page.</a>
        </span>
      </p>
`;
};