const Compliments = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Things that people compliment me for</h1>
      <ul className="list-disc list-inside space-y-4">
        <li>Stockholm AI, used to be a technically focused group with the best AI people in Stockholm</li>
        <li>AlphaGo Zero re-implementation</li>
        <li>Sana Labs (I just helped here, mainly with finding great talent that lead it to success)</li>
        <li>State of the art results on student modeling learning</li>
        <li>Depict.ai, YC startup, consistently got significant uplift in A/B test and grew to $1m very fast</li>
        <li>gpt-engineer, first breakthrough concept for LLM doing coding autonomously, cited by 20 papers incl. Yann Lecun</li>
      </ul>
    </div>
  );
};

export default Compliments;
