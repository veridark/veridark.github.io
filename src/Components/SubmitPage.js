import React from 'react';
import './SubmitPage.scss';
import Button from 'react-bootstrap/Button';

const SubmitPage = () => (
  <>
    <h1 id="guide-on-how-to-submit-a-new-model">How to submit a new model</h1>
    <p>
      To submit a new result, click on <a href="https://github.com/veridark/veridark.github.io">Create a new issue</a>{' '}
      and click on the <code>Get started </code> button to the right of the <code>Submit new model</code> template.
      Please fill in the information requested in the template.
    </p>
    <p>
      Let’s assume you want to submit an Authorship Verification model; after starting a new model issue template,
      you’ll have to fill in a number of fields:
    </p>
    <ul>
      <li>
        <p>
          <code>Model name</code> Please write here your model name. If it doensn’t have a particular name, please write
          write the underlying models/methods used. For example, if your Authorship Verification model is based on a
          siamese BERT, you could write it as <code>Siamese BERT</code>. Or if it is an ensemble of RNNs, write{' '}
          <code>RNN Ensemble</code>, etc.
        </p>
      </li>
      <li>
        <p>
          <code>Task(s)</code> Please write here the task that your model participates in. For example, you would write
          here <code>Author Verification</code>
        </p>
      </li>
      <li>
        <p>
          <code>Dataset(s)</code> Please write here the datasets your model trains/runs on. For example{' '}
          <code>DarkReddit+</code>. Please list here <strong>all</strong> the datasets you have run your model on.
        </p>
      </li>
      <li>
        <p>
          <code>External training data</code> Yes/No if your model was trained on external data (data that is not in the
          provided datasets). Large pretrained models (such as BERT) do not count as external training data.
        </p>
      </li>
      <li>
        <p>
          <code>Model size</code> <em>[Optional]</em> Please write here the number of parameters in millions. Eg, if you
          used a BERT-base, you’d probably write <code>110M</code>.
        </p>
      </li>
      <li>
        <p>
          <code>Paper title</code> <em>[Optional]</em> If you have a published paper, list name here.
        </p>
      </li>
      <li>
        <p>
          <code>Paper link</code> <em>[Optional]</em> input URL here; e.g. link to arxiv.org paper;
        </p>
      </li>
      <li>
        <p>
          <code>Source code</code> <em>[Optional]</em> input link to Github or other code repository here;
        </p>
      </li>
      <li>
        <p>
          <code>Results</code>: Please list your model’s metrics/results, one per line, like:{' '}
          <code>[Dataset], [Metric], [Value]</code>.
        </p>
      </li>
    </ul>
    <h2 id="example-submission">Example submission:</h2>
    <pre>
      <code>
        Model name: siamese BERT
        <br />
        Task(s): Authorship Verification
        <br />
        DarkReddit+
        <br />
        External training data: No
        <br />
        Model size: 110M
        <br />
        Paper title: (no paper yet)
        <br />
        Paper link: -
        <br />
        Source code: TODO
        <br />
        Results:
        <br />
        DarkReddit+, overall, 81.50
        <br />
      </code>
    </pre>
    <h2 id="other-considerations">Other considerations:</h2>
    <ul>
      <li>
        Send us any modifications that appear to a submission (for instance paper was published to a conference, new
        code is available etc.), by reopening the issue and providing the additional information.
      </li>
    </ul>
    <hr />
    <Button variant="primary" href="https://github.com/veridark/veridark.github.io/issues/new/choose">
      Submit your model
    </Button>
  </>
);

export default SubmitPage;
