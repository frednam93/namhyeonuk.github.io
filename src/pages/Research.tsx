// Research.tsx - Dark Theme Matching with Real Data
import React from "react";
import { Link } from "react-router-dom";

export default function Research() {
  return (
    <div className="px-6 py-12 max-w-4xl mx-auto bg-gray-900 text-gray-100 min-h-screen">
      <h2 className="text-4xl font-extrabold tracking-tight mb-8 text-center text-indigo-300 uppercase">Publications</h2>
      <div className="space-y-4">
        {[
          {
            title: "Heavily augmented sound event detection utilizing weak predictions",
            author: "H. Nam et al.",
            venue: "DCASE Challenge Tech. rep., 2021",
            link: "https://dcase.community/documents/challenge2021/technical_reports/DCASE2021_Nam_41_t4.pdf"
          },
          {
            title: "FilterAugment: An Acoustic Environmental Data Augmentation Method",
            author: "H. Nam et al.",
            venue: "ICASSP, 2022",
            link: "https://ieeexplore.ieee.org/document/9747680"
          },
          {
            title: "Temporal dynamic convolutional neural network for text-independent speaker verification and phonemic analysis",
            author: "S. H. Kim and H. Nam et al.",
            venue: "ICASSP, 2022",
            link: "https://ieeexplore.ieee.org/abstract/document/9747421"
          },
          {
            title: "Deep learning based cough detection camera using enhanced features",
            author: "G. T. Lee and H. Nam et al.",
            venue: "Expert Systems with Applications, 2022",
            link: "https://www.sciencedirect.com/science/article/pii/S0957417422010740"
          },
          {
            title: "Data augmentation and squeeze-and-excitation network on multiple dimension for sound event localization and detection in real scenes",
            author: "B. Y. Ko and H. Nam et al.",
            venue: "DCASE Challenge Tech. rep., 2022",
            link: "https://dcase.community/documents/challenge2022/technical_reports/DCASE2022_Ko_67_t3.pdf"
          },
          {
            title: "Frequency Dynamic Convolution: Frequency-Adaptive Pattern Recognition for Sound Event Detection",
            author: "H. Nam et al.",
            venue: "Interspeech, 2022",
            link: "https://www.isca-speech.org/archive/pdfs/interspeech_2022/nam22_interspeech.pdf"
          },
          {
            title: "Decomposed temporal dynamic CNN: Efficient time-adaptive network for text-independent speaker verification explained with speaker activation map",
            author: "S. H. Kim and H. Nam et al.",
            venue: "arXiv, 2022",
            link: "https://arxiv.org/abs/2203.15277"
          },
          {
            title: "VIFS: An end-to-end variational inference for foley sound synthesis",
            author: "J. Lee and H. Nam (Equal contribution) et al.",
            venue: "DCASE Challenge Tech. rep., 2023",
            link: "https://dcase.community/documents/challenge2023/technical_reports/DCASE2023_Lee_51_t7.pdf"
          },
          {
            title: "Analysis-based optimization of temporal dynamic convolutional neural network for text-independent speaker verification",
            author: "S. H. Kim and H. Nam et al.",
            venue: "IEEE Access, 2023",
            link: "https://ieeexplore.ieee.org/document/10151875"
          },
          {
            title: "Frequency & Channel Attention for Computationally Efficient Sound Event Detection",
            author: "H. Nam et al.",
            venue: "DCASE Workshop, 2023",
            link: "https://dcase.community/documents/workshop2023/proceedings/DCASE2023Workshop_Nam_32.pdf"
          },
          {
            title: "Auditory Neural Response Inspired Sound Event Detection Based on Spectro-temporal Receptive Field",
            author: "D. Min and H. Nam et al.",
            venue: "DCASE Workshop, 2023",
            link: "https://dcase.community/documents/workshop2023/proceedings/DCASE2023Workshop_Min_41.pdf"
          },
          {
            title: "PRTFNet: HRTF Individualization for Accurate Spectral Cues Using a Compact PRTF",
            author: "B. Y. Ko and H. Nam et al.",
            venue: "IEEE Access, 2023",
            link: "https://ieeexplore.ieee.org/abstract/document/10229140"
          },
          {
            title: "Real-Time Sound Recognition System for Human Care Robot Considering Custom Sound Events",
            author: "S. H. Kim and H. Nam et al.",
            venue: "IEEE Access, 2024",
            link: "https://ieeexplore.ieee.org/abstract/document/10473039"
          },
          {
            title: "Diversifying and Expanding Frequency-Adaptive Convolution Kernels for Sound Event Detection",
            author: "H. Nam et al.",
            venue: "Interspeech, 2024",
            link: "https://www.isca-archive.org/interspeech_2024/nam24_interspeech.pdf"
          },
          {
            title: "Self Training and Ensembling Frequency Dependent Networks with Coarse Prediction Pooling and Sound Event Bounding Boxes",
            author: "H. Nam et al.",
            venue: "DCASE Workshop, 2024",
            link: "https://dcase.community/documents/workshop2024/proceedings/DCASE2024Workshop_Nam_16.pdf"
          },
          {
            title: "ChatGPT Caption Paraphrasing and FENSE-based Caption Filtering for Automated Audio Captioning",
            author: "I. Choi and H. Nam et al.",
            venue: "DCASE Workshop, 2024",
            link: "https://dcase.community/documents/challenge2024/technical_reports/DCASE2024_Choi_38_t6.pdf"
          },
          {
            title: "Coherence-based Phonemic Analysis on the Effect of Reverberation to Practical Automatic Speech Recognition",
            author: "H. Nam et al.",
            venue: "Applied Acoustics, 2025",
            link: "https://www.sciencedirect.com/science/article/pii/S0003682X24003840"
          },
          {
            title: "Towards Understanding of Frequency Dependence on Sound Event Detection",
            author: "H. Nam et al.",
            venue: "arXiv, 2025, Submitted to IEEE/ACM TASLP",
            link: "https://arxiv.org/abs/2502.07208"
          },
          {
            title: "Pushing the limit of sound event detection with multi-dilated frequency dynamic convolution",
            author: "H. Nam et al.",
            venue: "arXiv, 2025, Submitted to IEEE SPL",
            link: "https://arxiv.org/abs/2406.13312"
          },
          {
            title: "JiTTER: Jigsaw Temporal Transformer for Event Reconstruction for Self-Supervised Sound Event Detection",
            author: "H. Nam et al.",
            venue: "arXiv, 2025, Submitted to IEEE/ACM TASLP",
            link: "https://arxiv.org/abs/2502.20857"
          },
          {
            title: "Temporal Attention Pooling for Frequency Dynamic Convolution in Sound Event Detection",
            author: "H. Nam et al.",
            venue: "arXiv, 2025, Submitted to IEEE/ACM TASLP",
            link: "https://arxiv.org/abs/2504.12670"
          },
          {
            title: "DNN based HRIRs Identification with a Continuously Rotating Speaker Array",
            author: "B. Y. Ko and H. Nam et al.",
            venue: "arXiv, 2025",
            link: "https://arxiv.org/abs/2504.14817"
          }
        ].map((pub, index) => (
          <div
            key={index}
            className="border border-gray-700 rounded-xl p-4 hover:shadow-md transition bg-gray-800/80 backdrop-blur-sm"
          >
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-medium text-indigo-400 hover:underline"
            >
              {pub.title}
            </a>
            <p className="text-sm text-gray-400">{pub.author}</p>
            <p className="text-sm text-gray-500">{pub.venue}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center space-y-2">
        <Link
          to="/"
          className="text-sm text-indigo-400 hover:text-indigo-300 underline block"
        >
          ← Back to Home
        </Link>
        <a
          href="https://scholar.google.com/citations?hl=ko&user=rCN5da8AAAAJ&view_op=list_works&sortby=pubdate"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-indigo-300 underline block"
        >
          📚 View all publications on Google Scholar
        </a>
      </div>
    </div>
  );
}
