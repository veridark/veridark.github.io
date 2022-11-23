import React from 'react';
import './AboutPage.scss';
import datasets_info from './datasets.json';
//import tasks_info from '../data/tasks.json';
import tasks_info from './tasks.json';
import UrlBuilder from './UrlBuilder';

function AboutPage() {
  return (
    <>
      <h1>Who are we?</h1>
      <p>
        We are a group of Romanian Machine Learning researchers from Bitdefender and from the University Of Bucharest.
        We are interested in Authorship Analysis applied in the cybersecurity context.
      </p>
      <h1>What is the VeriDark project?</h1>
      <h2>Benchmark</h2>
      <p>
        VeriDark provides a benchmark for Authorship Analysis tasks. It contains {tasks_info.tasks.length} tasks
        (Authorship Verification and Authorship Identification) on {datasets_info.datasets.length} newly created
        datasets.
      </p>
      <h2>Leaderboard</h2>
      <p>
        VeriDark tracks the performance of different models on the previously mentioned datasets and tasks, in order to
        facilitate progress of Authorship Analysis in the cybersecurity context.
      </p>
      <h1>How can you contribute to the leaderboard?</h1>
      <p>
        To add your model to the leaderboard, evaluate your model’s performance and{' '}
        <a href={UrlBuilder.submitPageUrl}>submit</a> your results, together with the paper and/or GitHub repo.
      </p>
      <h1>How can you raise an issue with the datasets or request deletion of certain examples?</h1>
      <p>
        The current datasets will be updated to account for potential issues (wrong labels, duplicates etc.) and
        examples containing sensitive information which receive a request for deletion. Please raise these issues or
        file a request for deletion at this <a href="https://forms.gle/1LSA6cvh4daUBxYUA">contact form</a>.
      </p>
      <h1>Acknowledgements</h1>
      <p>
        We want to thank the LiRo team, who allowed us to use code from their
        <a href="https://lirobenchmark.github.io"> leaderboard page</a>.
      </p>
      <h1>Team</h1>
      <ul>
        <li>Andrei Manolache, Researcher at Bitdefender</li>
        <li>Florin Brad, Researcher at Bitdefender</li>
        <li>Elena Burceanu, Researcher at Bitdefender</li>
        <li>Antonio Barbalau, PhD student (University of Bucharest)</li>
        <li>Marius Popescu, Lecturer at the University of Bucharest</li>
        <li>Radu Ionescu, Professor at the University of Bucharest</li>
      </ul>
    </>
  );
}

export default AboutPage;
